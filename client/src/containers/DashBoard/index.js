
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Wrapper from '../../Hoc/wrapper';
import Card from '../../components/main/card';
import ListLoader from '../../components/main/loader';
import '../../App.css';
import {CONSTANTS} from '../../App.Constants';

class DashBoard extends Component {

    state = {
        type: CONSTANTS.online
    }

    componentDidMount() {
        this.fetchRating(CONSTANTS.online);
    }

    fetchRating = (type) => {
        this.setState({ type: type });
        this.props.fetchRating(type);
    }

    render() {
        return (
            <Wrapper>
                <div className="container" >
                    <Header />
                    <div className="row mt-75">
                        <div className="col">
                            <div className="row px-5">
                                <div className="col-12 col-md-12 row">
                                    <button onClick={() => this.fetchRating(CONSTANTS.online)} type="button" className={"col-sm-2 col-md-2 btn mx-2 " + (this.state.type === CONSTANTS.online ? 'active' :'')}> Online Rating</button>
                                    <button onClick={() => this.fetchRating(CONSTANTS.instore)} type="button" className={"col-sm-2 col-md-2 btn mx-2 " + (this.state.type === CONSTANTS.instore ? 'active' :'')}> Instore Rating</button>
                                </div>
                            </div>
                            {this.props.loading ?
                                <div className="row px-5">
                                    <ListLoader />
                                </div>
                            :
                                <div className="row px-5">
                                    {this.props.ratings.map((element, index) => (
                                        index === 0 ? '' : <Card key={element.caption + index} data={element} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        ratings: state.ratings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRating: (type) => dispatch(actions.fetchRating(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);