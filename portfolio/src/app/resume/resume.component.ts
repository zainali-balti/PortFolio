import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService:Title, private render:Renderer2){
    this.titleService.setTitle("Zain Ali - Resume")
  }

  downloadFile(){
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/ZAIN-Internship.pdf'); // Ensure correct path
    link.setAttribute('download', 'ZAIN-Internship.pdf'); // Corrected method name
    link.click();
    link.remove();
  }

}
