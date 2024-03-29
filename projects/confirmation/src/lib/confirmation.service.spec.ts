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

import { TestBed } from '@angular/core/testing';
import { ConfirmationService } from './confirmation.service';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ConfirmationComponent } from './confirmation.component';

describe('ConfirmationService', () => {
  let service: ConfirmationService;
  let dialog: MatDialog;
  let dialogRef: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      imports: [BrowserAnimationsModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            afterClosed: jasmine.createSpy('MatDialogRef.afterClosed()')
          }
        }
      ]
    });
    service = TestBed.inject(ConfirmationService);
    dialog = TestBed.inject(MatDialog);
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<any>
    >;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when a user confirms', () => {
    let confirmCalled = false;

    beforeEach(() => {
      spyOn(dialog, 'open').and.returnValue(dialogRef);
      dialogRef.afterClosed.and.returnValue(of(true));
      service.confirm({
        title: '',
        message: '',
        confirm: () => {
          confirmCalled = true;
        }
      });
    });

    it('invokes the confirm callback', () => {
      expect(confirmCalled).toBeTrue();
    });
  });

  describe('when a user declines', () => {
    let confirmCalled = false;

    beforeEach(() => {
      spyOn(dialog, 'open').and.returnValue(dialogRef);
      dialogRef.afterClosed.and.returnValue(of(false));
      service.confirm({
        title: '',
        message: '',
        confirm: () => {
          confirmCalled = true;
        }
      });
    });

    it('invokes the confirm callback', () => {
      expect(confirmCalled).toBeFalse();
    });
  });
});
