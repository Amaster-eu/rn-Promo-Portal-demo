import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import GridView from 'react-native-gridview';
import {LinearGradient} from 'expo';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Thumbnail, Text} from 'native-base';

const styles = StyleSheet.create({
    viewLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dfdfdf",
        padding: 20,
    },
    scrollView: {
        backgroundColor: '#dfdfdf',
    },
    viewCenter: {
        alignItems: 'center',
    },
    gridView: {
        // width: 552,
    },
    listGroupItem: {
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
        // width: 180,
        height: 116,
        padding: 8,
        margin: 2,

    },
    listGroupText: {
        color: '#ec9557',
        backgroundColor: 'transparent',
    },
    channelCardImage: {
        // backgroundRepeat: no-repeat,
        // backgroundPosition: center,
        // backgroundSize: cover,
    },
    sizeSmall: {
        width: 38,
        height: 38,
    },
    sizeLarge: {
        width: 78,
        height: 78,
    },
});

/**
 * https://school.geekwall.in/p/ByT9D_slQ/how-to-use-flatlist-react-native-flatlist-tutorial
 */
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            limit: 20,
            limitImg: 5,
            error: null,
            isLoadingItems: true
        };
    }

    componentDidMount() {
        this.loadNewReleases();
    }

    loadNewReleases = () => {
        const {limit, limitImg} = this.state;
        const apiPrefix = 'https://accounts.spotify.com/api';
        const base64credentials = 'OGNmNTM4MGY1ODhjNGVhMTg4NDk2ZTI1NGVkNjM3NjA6MjZjZjkxMTg2ZDdlNDBhMWI1ZmVlY2Y0NDlmNzk4MWI=';

        fetch(`${apiPrefix}/token`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${base64credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    token: res.access_token,
                    error: res.error || null,
                });
                // console.log('👉Token:', this.state.token);
            })
            .then(json => {
                fetch(`https://api.spotify.com/v1/browse/categories?offset=0&limit=${limit}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${this.state.token}`,
                    }
                })
                    .then(json => json.json())
                    .then(json => {
                        let requestQueue = json.categories.items.map(item => {
                            const model = {};
                            model.id = item.id;
                            model.name = item.name;
                            this.getChannelsImages(item.id, limitImg).then(resp => model.imageUrl = resp);
                            return model;
                        });

                        // console.log('👉Token:', this.state.token);

                        setTimeout(() => {
                            this.setState({
                                data: requestQueue,
                                error: json.error || null,
                                isLoadingItems: false
                            });

                            // console.log('👉this.state.data', this.state.data);
                        }, 200);
                    });
            })
            .catch(error => {
                this.setState({error});
            });
    };

    getChannelsImages = (channelID, limitImg) => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.spotify.com/v1/browse/categories/${channelID}/playlists?offset=0&limit=${limitImg}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.state.token}`,
                }
            })
                .then(img => img.json())
                .then(img => {
                    let requestQueue = img.playlists.items.map(item => {
                        let model = item.images ? item.images[0].url : undefined;
                        return model;
                    });
                    // console.log('👉channelID', channelID);
                    // console.log('👉requestQueue',requestQueue);
                    resolve(requestQueue);
                })
        });
    };

    onPressGetChannel = (channelID) => {
        console.log('👉id', channelID);
    };

    render() {
        if (this.state.isLoadingItems) {
            return (
                <View style={styles.viewLoading}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        return (
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.viewCenter}>
                <GridView
                    // style={[styles.gridView, {width: this.props.isPortrait ? 368 : 552}]}
                    style={[styles.gridView, {width: 368}]}
                    data={this.state.data}
                    fillMissingItems={true}
                    // itemsPerRow={this.props.isPortrait ? 2 : 3}
                    itemsPerRow={2}
                    renderItem={(item) => {
                        return (
                            <LinearGradient colors={['white', '#e3e3e3']}
                                            style={styles.listGroupItem}>
                                <Text style={styles.listGroupText}
                                      onPress={() => this.onPressGetChannel(item.id)}>
                                    {`${item.name}`}
                                </Text>
                                <Grid onPress={() => this.onPressGetChannel(item.id)}>
                                    <Col style={styles.sizeLarge}>
                                        <Row style={{marginBottom: 2}}>
                                            <Col>
                                                <Thumbnail style={styles.sizeSmall}
                                                           square source={{uri: `${item.imageUrl[0]}`}}/>
                                            </Col>
                                            <Col>
                                                <Thumbnail style={styles.sizeSmall}
                                                           square source={{uri: `${item.imageUrl[1]}`}}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Thumbnail style={styles.sizeSmall}
                                                           square source={{uri: `${item.imageUrl[2]}`}}/>
                                            </Col>
                                            <Col>
                                                <Thumbnail style={styles.sizeSmall}
                                                           square source={{uri: `${item.imageUrl[3]}`}}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Thumbnail style={styles.sizeLarge}
                                                   square source={{uri: `${item.imageUrl[4]}`}}/>
                                    </Col>
                                </Grid>
                            </LinearGradient>
                        );
                    }}
                />
            </ScrollView>
        );
    }
}
