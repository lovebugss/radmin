/**
 * Created by renjp on 2018/12/27.
 */
import React from 'react';
import {Card, Icon, Avatar,Tag } from 'antd';

const {Meta} = Card;
function Tags() {

    return(
        <Card
            hoverable="true"
            title="标签分类"
        >
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>

        </Card>
    );
}

export default Tags;