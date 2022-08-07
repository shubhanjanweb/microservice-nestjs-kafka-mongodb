import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { AdminModule } from "./modules/admin/admin.module";
import { EngineerModule } from "./modules/engineer/engineer.module";

const routes: Routes = [
  {
    path: 'engineer',
    module: EngineerModule
  }, {
    path: 'admin',
    module: AdminModule
  },
];

@Module({
  imports: [
    RouterModule.register(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }