import { NgModule } from '@angular/core';
import { SysRoleComponent } from './role/role.component';
import { SysRoleEditComponent } from './role/edit/edit.component';
import { SysRoleViewComponent } from './role/view/view.component';

const COMPONENTS = [SysRoleComponent];
const COMPONENTS_NOROUNT = [SysRoleEditComponent, SysRoleViewComponent];

@NgModule({
  imports: [],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SystemModule {}
