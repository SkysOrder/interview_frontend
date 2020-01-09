import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'Flex-Solver';

	options = [
		{
			name: 'A',
			value: 1
		},
		{
			name: 'B',
			value: 2
		},
		{
			name: 'C',
			value: 3
		},
	]


	onClick() {
		alert('You got it')
	}
	
}
