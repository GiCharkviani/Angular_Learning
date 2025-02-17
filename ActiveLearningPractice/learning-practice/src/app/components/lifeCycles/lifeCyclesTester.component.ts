import {
  AfterContentChecked,
  AfterContentInit, afterNextRender, afterRender, AfterRenderPhase, AfterViewChecked,
  AfterViewInit,
  Component,
  DestroyRef,
  DoCheck,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-localComponent',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Age: {{age}}</p>
      <p>Hobby: {{hobby.name}}</p>

      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class localComponent implements OnChanges, OnInit, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input('firstName') name!: string;
  @Input() age: number = 0;
  hobby = {
    name: 'Swimming'
  }
  private destroyRef = inject(DestroyRef);

  constructor() {
    console.log('CONSTRUCTOR_CHILD');

    this.destroyRef.onDestroy(() => {
      console.log('ON_DESTROY_REF_CHILD')
    })

    afterNextRender(() => {
      console.warn('AFTER_NEXT_RENDER_CHILD')
    })

    afterRender(() => {
      console.warn('AFTER_RENDER_CHILD')
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'ON_CHANGES_CHILD')
  }

  ngOnInit() {
    console.log('ON_INIT_CHILD')
  }

  ngDoCheck() {
    console.log('DO_CHECK_CHILD')
  }

  ngAfterContentInit() {
    console.log('AFTER_CONTENT_INIT_CHILD')
  }

  ngAfterContentChecked() {
    console.log('AFTER_CONTENT_CHECKED_CHILD')
  }

  ngAfterViewInit() {
    this.hobby = {
      name: 'Programming'
    }
    console.log('AFTER_VIEW_INIT_CHILD')
  }

  ngAfterViewChecked() {
    console.log('AFTER_VEW_CHECKED_CHILD')
  }

  ngOnDestroy() {
    console.log('ON_DESTROY_CHILD')
  }

}


@Component({
  selector: 'app-lifeCycles',
  standalone: true,
  imports: [
    FormsModule,
    localComponent
  ],
  host: {},
  hostDirectives:[],
  template: `
    <input type="text" [(ngModel)]="name" />
    <app-localComponent [age]="23" [firstName]="name" >
      <h2>Your content</h2>
    </app-localComponent>
  `,
  styles: ``
})
export class LifeCyclesTesterComponent implements
  OnInit,
  OnDestroy,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked {
  public name!: string;
  private destroyRef = inject(DestroyRef);

  constructor() {
    console.log('CONSTRUCTOR');

    this.destroyRef.onDestroy(() => {
      console.log('ON_DESTROY_REF')
    })

    afterNextRender(() => {
      console.warn('AFTER_NEXT_RENDER')
    })

    afterRender(() => {
      console.warn('AFTER_RENDER')
    })
  }

  ngOnInit() {
    console.log('ON_INIT')
  }

  ngDoCheck() {
    console.log('DO_CHECK')
  }

  ngAfterContentInit() {
    console.log('AFTER_CONTENT_INIT')
  }

  ngAfterContentChecked() {
    console.log('AFTER_CONTENT_CHECKED')
  }

  ngAfterViewInit() {
    console.log('AFTER_VIEW_INIT')
  }

  ngAfterViewChecked() {
    console.log('AFTER_VEW_CHECKED')
  }

  ngOnDestroy() {
    console.log('ON_DESTROY')
  }

}


