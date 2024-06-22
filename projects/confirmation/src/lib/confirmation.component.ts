/*
 * Tragically Slick Confirmation - A reusable confirmation component.
 * Copyright (C) 2021, Tragically Slick Software, LTD.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses>
 */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogModel } from './confirmation-dialog-model';

@Component({
  selector: 'tsm-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  title: string;
  message: string;
  yesButton: string;
  yesButtonColor: string;
  noButton: string;
  noButtonColor: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogModel
  ) {
    this.title = data.title || '';
    this.message = data.message || '';
    this.yesButton = data.yesButton || '';
    this.yesButtonColor = data.yesButtonColor || 'primary';
    this.noButton = data.noButton || '';
    this.noButtonColor = data.noButtonColor || 'warn';
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDecline(): void {
    this.dialogRef.close(false);
  }
}
