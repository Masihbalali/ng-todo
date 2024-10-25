import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'mainSection',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './mainSection.component.html',
    styleUrl: './mainSection.component.css'
})
export class mainSectionComponent {
    title = 'mainSection';
    name: string = "Masih"
    inputValue: string = ""


    handleAdd() {
        alert(this.inputValue)
    }
}
