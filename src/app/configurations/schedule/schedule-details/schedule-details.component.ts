import {Component, Input} from "@angular/core";
import {Schedule} from "../schedule";
import {CrawljobService} from "../../crawljobs/crawljob.service";
import {FormGroup, FormArray, FormBuilder} from "@angular/forms";
import {MdlSnackbarService} from "angular2-mdl";
import {Label} from "../../../commons/models/label";

@Component({
  selector: 'schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent {
  @Input()
  schedule: Schedule;
  scheduleForm: FormGroup;


  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private crawljobService: CrawljobService,
              private mdlSnackbarService: MdlSnackbarService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.scheduleForm = this.fb.group({
      id: '',
      cron_expression:'',
      valid_from:'',
      valid_to: '',
      meta: this.fb.group({
        name: '',
        description: '',
//        label: this.fb.array([]),
      }),
    });
  }

  updateData(schedule: Schedule) {
    this.scheduleForm.controls['id'].setValue(schedule.id);
    this.scheduleForm.controls['cron_expression'].setValue(schedule.cron_expression);
    this.scheduleForm.controls['valid_from'].setValue(schedule.valid_from);
    this.scheduleForm.controls['valid_to'].setValue(schedule.valid_to);
    this.scheduleForm.controls['meta'].patchValue({
      name: schedule.meta.name as string,
      description: schedule.meta.description as string,
    });
    this.setLabel(schedule.meta.label);
  };

  ngOnChanges() {
    this.updateData(this.schedule);
  }


  createSchedule() {
    this.schedule = this.prepareSaveSchedule();
    this.crawljobService.createSchedule(this.schedule).then((newSchedule: Schedule) => {
      this.createHandler(newSchedule);
    });
    this.mdlSnackbarService.showSnackbar(
      {
        message: 'Lagret',
      });
  }

  updateSchedule(schedule: Schedule): void {
    this.schedule = this.prepareSaveSchedule();
    this.crawljobService.updateSchedule(this.schedule).then((updatedSchedule: Schedule) => {
      this.updateHandler(updatedSchedule);
    });
    this.mdlSnackbarService.showSnackbar(
      {
        message: 'Lagret',
      });
  }

  deleteSchedule(scheduleId: String): void {
    this.crawljobService.deleteSchedule(scheduleId).then((deletedScheduleId: String) => {
      this.deleteHandler(deletedScheduleId);
    });
    this.mdlSnackbarService.showSnackbar(
      {
        message: 'Slettet',
      });
  }

  setLabel(label) {
    const labelFGs = label.map(label => (this.fb.group(label)));
    const labelFormArray = this.fb.array(labelFGs);
    this.scheduleForm.setControl('label', labelFormArray);
  }

  addLabel() {
    const control = <FormArray>this.scheduleForm.controls['label'];
    control.push(this.initLabel());
  }

  removeLabel(i: number) {
    const control = <FormArray>this.scheduleForm.controls['label'];
    control.removeAt(i);
  }

  get label(): FormArray {
    return this.scheduleForm.get('label') as FormArray;
  };

  initLabel() {
    return this.fb.group({
      key: '',
      value: '',
    });
  }

  prepareSaveSchedule(): Schedule {
    const formModel = this.scheduleForm.value;
    // deep copy of form model lairs
    const labelsDeepCopy: Label[] = formModel.label.map(
      (label: Label) => Object.assign({}, label)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveSchedule: Schedule = {
      id: this.schedule.id,
      cron_expression: formModel.cron_expression,
      valid_from: formModel.valid_from,
      valid_to: formModel.valid_to,
      meta: {
        name: formModel.meta.name as string,
        description: formModel.meta.description as string,
        // created: '',
        // created_by: '',
        // last_modified: null,
        last_modified_by: '',
        label: labelsDeepCopy
      }
    };
    return saveSchedule;
  }

}
