import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
 transform(Notification: any[], field: string, value: string): any[] {
   if (!Notification) return [];
   return Notification.filter(it => it[field] == value);
 }
}