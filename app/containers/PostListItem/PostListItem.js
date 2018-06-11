import React, { Component } from 'react';

import { Pagination } from 'antd';

class PostList extends Component {

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                plop
                {/*<Pagination defaultCurrent={1} total={10} /> */}
            </div>
        );
    }
}

export default PostList;