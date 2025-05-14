import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (!value || value.length <= limit) {
      return value;
    }

    const nextPeriod = value.indexOf('.', limit);
    if (nextPeriod !== -1) {
      return value.substring(0, nextPeriod + 1) + ' [...]';
    }

    // Nessun punto dopo il limite, tronca normalmente
    return value.substring(0, limit) + ' [...]';
  }
}
