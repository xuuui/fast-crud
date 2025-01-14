import {
  EditableCellActiveProps,
  EditableEachCellsOpts,
  EditableEachRowsOpts,
  EditableRow,
  EditableValidateResult
} from "./editable";
import { EditableOnEnabledProps } from "../use";

export type EditableAddRowOptions = {
  row?: any;
  active?: boolean;
};

export type EditableActiveColsOptions = {
  cols: string[];
} & EditableCellActiveProps;

/**
 * crudExpose.editable
 * editable暴露的方法
 */
export type Editable = {
  enable(opts?: any, onEnabled?: (opts: EditableOnEnabledProps) => void): Promise<void>;
  /**
   * 禁用编辑
   */
  disable(): void;
  /**
   * 激活所有编辑
   */
  active(opts?: EditableCellActiveProps): void;
  /**
   * 退出编辑
   */
  inactive(): void;

  /**
   * 取消所有编辑
   */
  cancel(): void;

  /**
   * 保存所有编辑，不提交到后台，仅让本地保存
   */
  persist(): void;
  /**
   * 添加行
   */
  addRow(opts?: EditableAddRowOptions): void;
  /**
   * 编辑cols
   * @param opts
   */
  activeCols(opts: EditableActiveColsOptions): void;
  /**
   * 还原，取消编辑
   */
  resume(): void;
  /**
   * 删除行
   * @param editableId
   */
  removeRow(editableId: any): void;
  /**
   * 获取可编辑行对象
   * @param editableId
   */
  getEditableRow(editableId: any): EditableRow;
  /**
   * 执行保存行
   * @param opts
   */
  doSaveRow(opts: { editableId?: any; row?: any }): Promise<void>;
  /**
   * 取消行编辑状态
   * @param opts
   */
  doCancelRow(opts: { editableId?: any; row?: any }): Promise<void>;
  /**
   * 删除行
   * @param opts
   */
  doRemoveRow(opts: { editableId?: any; row?: any }): Promise<void>;
  /**
   * 遍历可编辑单元格对象
   * @param callback
   */
  eachCells(callback: (opts: EditableEachCellsOpts) => void): void;
  /**
   * 遍历可编辑行对象
   * @param callback
   */
  eachRows(callback: (opts: EditableEachRowsOpts) => void): void;
  /**
   * 校验表单，返回true，表示校验通过
   */
  validate(): Promise<EditableValidateResult>;

  /**
   * 获取可提交的表格数据（移除$editable_id字段）
   * 如果传data则移除传入data的editable_id，否则从表格中获取
   */
  getTableData(data?: any[]): any[];

  /**
   * 同上
   * @param data
   */
  getCleanTableData(data?: any[]): any[];

  getInstance(): any;
};
