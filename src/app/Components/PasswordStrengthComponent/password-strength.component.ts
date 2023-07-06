import { Component } from '@angular/core';
@Component({
    selector: 'app-password-strength',
    templateUrl: './password-check.component.html',
    styleUrls: ['./password-check.component.css']
  })
  export class PasswordStrengthComponent {
    password: string = '';
  
    calculatePasswordStrength() {
      const passwordLength = this.password.length;
      let sections: string[] = [];
  
      if (passwordLength === 0) {
        sections = ['gray', 'gray', 'gray'];
      } else if (passwordLength < 8) {
        sections = ['red', 'red', 'yellow'];

      } else if (
        (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
        (/[a-zA-Z]/.test(this.password) && /[^0-9a-zA-Z]/.test(this.password)) ||
        (/[0-9]/.test(this.password) && /[^0-9a-zA-Z]/.test(this.password))
      ) {
        sections = ['yellow', 'yellow', 'gray'];
      } else {
        sections = ['red', 'gray', 'gray'];
      }
  
      this.updateSectionColors(sections);
    }
  
    updateSectionColors(sections: string[]) {
      const strengthSections = document.getElementsByClassName('strength-section');
  
      for (let i = 0; i < strengthSections.length; i++) {
        strengthSections[i].classList.remove('gray', 'red', 'yellow', 'green');
        strengthSections[i].classList.add(sections[i]);
      }
    }
  
    getSectionStyle(index: number): { [key: string]: string } {
        const sectionStyle: { [key: string]: string } = {};
      
        switch (index) {
          case 0:
            sectionStyle['background-color'] = this.getSectionColor(index);
            break;
          case 1:
            sectionStyle['background-color'] = this.getSectionColor(index);
            break;
          case 2:
            sectionStyle['background-color'] = this.getSectionColor(index);
            break;
        }
      
        return sectionStyle;
      }
  
    getSectionColor(index: number): string {
      const passwordLength = this.password.length;
  
      if (passwordLength === 0) {
        return 'gray';
      } else if (passwordLength < 8) {
        return 'red';
      } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^0-9a-zA-Z]/.test(this.password)) {
        return 'green';
      } else if (
        (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
        (/[a-zA-Z]/.test(this.password) && /[^0-9a-zA-Z]/.test(this.password)) ||
        (/[0-9]/.test(this.password) && /[^0-9a-zA-Z]/.test(this.password))
      ) {
        return '';
      } else {
        return '';
      }
    }
  }