import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { SFSchema } from '@delon/form';
// @ts-ignore
import { SimpleTableComponent } from '@delon/abc';
import { RoleService } from '../../../core/service/sys/role.service';
import { NzMessageService } from 'ng-zorro-antd';
import { SysRoleEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-sys-role',
  // 引入页面模板文件
  templateUrl: './role.component.html',
})
export class SysRoleComponent implements OnInit {
  url = `sys/role/list`;
  searchScheme: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st') st: SimpleTableComponent;
  columns: SimpleTableComponent[] = [
    { title: '编号', index: 'id' },
    { title: '角色名称', index: 'roleName' },
    {
      title: '操作',
      button: [
        { text: '查看', click: (item, key) => `/form/${item.id}` },
        { text: '编辑', type: 'static', component: SysRoleComponent, click: 'reload' },
        { text: '删除', type: 'del', click: (item, key) => this.delete(item.id) },
      ],
    },
  ];

  constructor(private roleService: RoleService, private modal: ModalHelper, private msg: NzMessageService) {}

  // OnInit默认构造函数
  ngOnInit() {}

  add() {
    this.modal.createStatic(SysRoleEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  delete(id) {
    this.roleService.delete(id).subscribe((res: any) => {
      this.msg.success(res.msg);
      this.st.reload();
    });
  }
}
