import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption;

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
   * Write a new value to the element.
   */
  writeValue(obj: any): void {
    this.value = obj;
  };
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  };
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {};
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {};

}