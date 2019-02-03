import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {

    loadData = async () => {
        const { PostActions, number } = this.props;
        try {
            const response = await PostActions.getPost(number);
            console.log(response);

        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.number !== prevProps.number) this.loadData();
    }

    render() {
        const { CounterActions, number, post, loading, error } = this.props;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                {
                  loading
                    ? <h2>로딩 중...</h2>
                    : error
                        ? <h2>오류 발생</h2>
                        : <div>
                            <h2>{post.title}</h2>
                            <h2>{post.body}</h2>
                          </div>
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);