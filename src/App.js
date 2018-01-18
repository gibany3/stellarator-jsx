import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Input from './components/Input';

function handleButtonClick() {
	alert('button clicked')
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    getValue(e) {
        console.log(e.target.name, e.target.value)
    }

	render() {
		return (
			<div>
				{/*
					Component:
						Button

					Props:
 +						type (possible values: primary - default / secondary / disabled)
 +						loading (possible values: true / false)
  						onButtonClick (function)
				*/}

				<Button onButtonClick={handleButtonClick}>Hello</Button>
                <br/>
                <br/>


				{/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}

                <Text size="large" heading={false}>Text</Text>
                <br/>

				{/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}

                <Notification type="danger">Sample text</Notification>
                <br/>
                <br/>

				{/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
						onInputChange (function)
				*/}

                <Input onInputChange={this.getValue.bind(this)} type='text' size='small' name='username'></Input>


				{/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}



				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}


			</div>
		);
	}
}

export default App;
