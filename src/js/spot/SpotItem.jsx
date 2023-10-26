import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../common/Image';
import TextButton from '../common/TextButton';
import { Box, Heading } from '@chakra-ui/layout';

export default class SpotItem extends PureComponent {
    static propTypes = {
        showDetails: PropTypes.bool,
        isSelected: PropTypes.bool,
        data: PropTypes.object.isRequired,
        onDetailsClick: PropTypes.func,
    };
    static defaultProps = {
        showDetails: true,
    };

    _onDetailsClick = evt => {
        const {data, onDetailsClick} = this.props;

        onDetailsClick(data);
    };

    render() {
        const {
            showDetails,
            isSelected,
            data: {image, distance, title},
        } = this.props;
        const classes = classNames('SpotItem', {
            'SpotItem-selected': isSelected,
        });

        return (
            <Box className={classes}>
                <Image src={image} />
                <Box className="SpotItem-info">
                    <Heading>{title}</Heading>
                    <Text as="p">{distance}</Text>
                    {showDetails && (
                        <TextButton onClick={this._onDetailsClick}>
                            Details
                        </TextButton>
                    )}
                </Box>
            </Box>
        );
    }
}
