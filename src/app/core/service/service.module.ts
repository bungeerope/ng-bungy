import { NgModule } from '@angular/core';

import { RoleService } from './sys/role.service';
import { ModuleService } from './sys/module.service';

@NgModule({
  providers: [RoleService, ModuleService],
})
export class ServiceModule {}
