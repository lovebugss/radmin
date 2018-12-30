/**
 * Created by renjp on 2018/12/29.
 */
import React from 'react';
import './style.css'
import {Card} from 'antd';
import {connect} from  'react-redux'
import Masonry from 'react-masonry-component';
const {Meta} = Card;

function Photo() {

    return (
        <div>
            <Card
                className="card"
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        </div>
    )
}


const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = {background: '.my-bg-image-el'}

class Gallery extends React.Component {
    render() {
        // const childElements = this.props.elements.map(function(element){
        //     return (
        //         <div className="image-element-class">
        //             <img src={element.src} />
        //         </div>
        //     );
        // });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
                <div className="image-element-class">
                    <Photo/>
                </div>
            </Masonry>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
