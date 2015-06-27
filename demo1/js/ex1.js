/**
 * besq
 * Copyright 2015 Baidu Inc. All rights reserved.
 * @Date:   2015-06-27 15:42:12
 * @Last Modified by:   lizhuo04
 * @Last Modified time: 2015-06-27 16:48:38
 * @file 一个简单的DropDown
 * @author lizhuo04(lizhuo04@baidu.com)
 */
var CountryDropdown = React.createClass({
	getInitialState: function () {
		return {
			showOptions: false
		};
	},

	render: function () {
		var options;
		if (this.state.showOptions) {
			options = (
				<ul className='options'>
					<li>地球</li>
					<li>太阳</li>
					<li>水星</li>
				</ul>
			);
		}

		return (
				<div className='dropdown' onClick={this.handeClick}>
					<label>选择要居住的星球</label>
					{options}
				</div>
		);
	},

	handeClick: function () {
		if (!this.state.showOptions) {
			this.setState({
				showOptions: true
			});
		}
		else {
			this.setState({
				showOptions: false
			});
		}
	}
});

React.render(
	<CountryDropdown />,
	document.getElementById('main')
);
