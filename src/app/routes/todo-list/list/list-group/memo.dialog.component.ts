import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
    selector: 'app-dialog-data-example-dialog',
    template: `
        <h2 mat-dialog-title>任务备注</h2>
        <mat-dialog-content>
            <mat-form-field>
                <input type="text" matInput [(ngModel)]="data.memo">
            </mat-form-field>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="data.memo">确定</button>
            <button mat-button (click)="onCancelClick()">取消</button>
        </mat-dialog-actions>
    `,
    styles: [
            `
            .mat-dialog-title {
                margin-bottom: 10px;
            }
            .mat-dialog-title, mat-dialog-content, mat-dialog-actions {
                display: flex;
                justify-content: center;
            }
        `
    ]
})
export class MemoDialogComponent {
    static cancel = 'cancel'

    constructor(private dialogRef: MatDialogRef<MemoDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onCancelClick() {
        this.dialogRef.close(MemoDialogComponent.cancel)
    }
}
