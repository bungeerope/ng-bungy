import { Injectable } from '@angular/core'; // 标记性元数据，表示一个类可以由Injector进行创建，即可注入的。
import { HttpClient } from '@angular/common/http'; // 将作为http client用于数据请求。
import { Observable } from 'rxjs'; // 在应用各个部分间传递消息提供支持。将用于时间处理、异步编程、处理多个值等场景。

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  get(id: any): Observable<any> {
    return this.http.get(`sys/role/${id}`);
  }

  save(value): Observable<any> {
    return this.http.post(`sys/role/save`, value);
  }

  getRoles(): Observable<any> {
    return this.http.get(`sys/role/list`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`sys/role/${id}`);
  }
}
