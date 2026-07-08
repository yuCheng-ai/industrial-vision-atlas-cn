export interface VisionModelFamily {
  name: string;
  category: string;
  bestFor: string[];
  typicalModels: string[];
  useWhen: string[];
  avoidWhen: string[];
  dataNeed: string;
  deployment: string[];
  note: string;
}

export const modelFamilies: VisionModelFamily[] = [
  {
    name: '传统视觉规则算法',
    category: '规则视觉',
    bestFor: ['尺寸测量', '边缘定位', '有无检测', '孔位检测', '几何关系判断'],
    typicalModels: ['阈值分割', '边缘检测', 'Blob 分析', '模板匹配', '形态学', '亚像素测量'],
    useWhen: ['成像稳定', '目标规则明确', '验收需要可解释', '样本数据少'],
    avoidWhen: ['外观变化大', '缺陷形态不固定', '背景纹理复杂'],
    dataNeed: '通常不需要大量标注图，重点是成像稳定性和参数调试。',
    deployment: ['OpenCV', 'HALCON', 'VisionPro', '智能相机'],
    note: '适合规则明确、重复性高、验收指标稳定的检测任务。',
  },
  {
    name: '实时目标检测',
    category: '目标检测',
    bestFor: ['零件定位', '有无检测', '装配缺失', '目标计数', '机器人粗定位'],
    typicalModels: ['YOLOv8', 'YOLO11', 'YOLO26', 'RT-DETR', 'YOLOX'],
    useWhen: ['需要输出目标位置', '类别明确', '需要实时性', '样本可标框'],
    avoidWhen: ['精密尺寸测量', '像素级边界判断', '极小缺陷且成像不稳定'],
    dataNeed: '需要按类别标注检测框；小目标需要关注分辨率、标注质量和增强策略。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO', 'NCNN', 'RKNN'],
    note: '适合目标定位和类别判断，不适合替代精密测量流程。',
  },
  {
    name: '实例分割 / 语义分割',
    category: '分割',
    bestFor: ['缺陷区域分割', '胶路检测', '焊缝区域', '污渍面积', '异物轮廓'],
    typicalModels: ['YOLO-Seg', 'Mask R-CNN', 'U-Net', 'DeepLab', 'SegFormer'],
    useWhen: ['需要像素级区域', '需要计算面积、长度、轮廓', '缺陷边界影响判定'],
    avoidWhen: ['只需要有无判断', '标注成本无法接受', '边界成像不清晰'],
    dataNeed: '需要 mask 标注；标注成本高于检测框，适合高价值缺陷或区域测量任务。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    note: '分割效果依赖缺陷边界的成像质量。',
  },
  {
    name: '异常检测 / 少样本缺陷检测',
    category: '异常检测',
    bestFor: ['缺陷样本少', '外观异常', '纹理缺陷', '新缺陷发现', '正常样本充足'],
    typicalModels: ['PatchCore', 'PaDiM', 'FastFlow', 'DRAEM', 'STFPM', 'Anomalib'],
    useWhen: ['坏品样本少', '缺陷类型不固定', '正常样本容易收集', '需要热力图定位'],
    avoidWhen: ['正常品波动很大', '缺陷与正常差异极小', '光学条件波动明显'],
    dataNeed: '通常需要大量正常样本，少量或不需要缺陷样本；样本需要覆盖现场波动。',
    deployment: ['OpenVINO', 'ONNX Runtime', 'TensorRT'],
    note: '适合正常样本稳定、缺陷类型难以完整枚举的外观检测。',
  },
  {
    name: 'OCR / OCV 字符识别',
    category: 'OCR',
    bestFor: ['喷码识别', '标签字符', '序列号', '日期批号', '印刷字符验证'],
    typicalModels: ['PaddleOCR', 'PP-OCRv5', 'CRNN', 'SVTR', 'DBNet'],
    useWhen: ['字符清晰', '需要读出内容', '需要字符正确性验证', '码制或字体变化较多'],
    avoidWhen: ['字符反光严重', '字符高度不足', '运动模糊明显'],
    dataNeed: '需要覆盖字体、角度、模糊、反光、批次变化；OCV 可结合模板和规则。',
    deployment: ['Paddle Inference', 'ONNX Runtime', 'OpenVINO', 'TensorRT'],
    note: '字符识别需要同时控制字符高度、对焦、光源和运动模糊。',
  },
  {
    name: '交互式分割 / 辅助标注',
    category: '数据准备',
    bestFor: ['快速标注', '辅助生成 mask', '交互式分割', '前期样本整理'],
    typicalModels: ['SAM', 'SAM 2'],
    useWhen: ['需要提高标注效率', '对象边界相对清楚', '需要人工交互修正', '进行数据集准备'],
    avoidWhen: ['无人值守实时判定', '工业缺陷很小', '边界依赖特殊光学条件'],
    dataNeed: '主要用于标注和前处理；生产检测通常需要专用规则或专用模型。',
    deployment: ['离线标注工具', 'GPU 工作站', '半自动数据平台'],
    note: '适合作为数据准备工具，不作为产线判定的默认方案。',
  },
  {
    name: '姿态估计 / 关键点',
    category: '定位',
    bestFor: ['装配孔位', '零件姿态', '机械臂动作', '抓取点估计'],
    typicalModels: ['YOLO-Pose', 'HRNet', 'OpenPose', 'Keypoint R-CNN'],
    useWhen: ['目标位置需要由关键点表达', '需要角度、姿态、抓取点'],
    avoidWhen: ['关键点不可见', '遮挡严重', '精度要求超过成像能力'],
    dataNeed: '需要关键点标注，且标注一致性要求较高。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    note: '常与相机标定、手眼标定和执行机构误差评估结合使用。',
  },
  {
    name: '3D 点云 / 高度图算法',
    category: '3D视觉',
    bestFor: ['高度检测', '胶路检测', '焊缝检测', '体积测量', '形变检测'],
    typicalModels: ['PointNet++', 'PointNet', '传统点云拟合', '高度图 CNN', '轮廓拟合'],
    useWhen: ['2D 灰度无法表达高度', '需要 Z 向尺寸', '缺陷表现为形貌变化'],
    avoidWhen: ['节拍过快但 3D 采集不足', '遮挡严重', '表面材质导致点云缺失'],
    dataNeed: '需要 3D 数据、标定数据和稳定采集条件；验收重点是 Z 向精度和点云完整率。',
    deployment: ['3D 相机 SDK', 'Open3D', 'PCL', '工控机'],
    note: '3D 方案需要单独评估采集方式、标定流程、节拍和验收指标。',
  },
];

export const modelSelectionRules = [
  ['尺寸测量 / 孔位 / 间隙', '传统视觉 + 背光 + 远心镜头', '优先保证边缘质量、标定精度和重复性。'],
  ['有无检测 / 装配缺失 / 计数', '目标检测 / 模板匹配 / Blob', '目标稳定时可采用规则算法；变化较大时采用检测模型。'],
  ['划痕 / 污渍 / 异物 / 表面缺陷', '异常检测 / 分割模型 / 传统纹理算法', '先评估光源角度、表面反光和缺陷对比度。'],
  ['喷码 / 标签 / 字符', 'PaddleOCR / OCV / 传统读码', '关注字符高度、对焦、反光和运动模糊。'],
  ['胶路 / 焊缝 / 高度 / 形变', '3D 轮廓 / 高度图 / 点云算法', '当 2D 图像无法表达高度差异时采用 3D 方案。'],
  ['机器人抓取 / 定位 / 姿态', '目标检测 + 关键点 + 标定', '需要同时评估坐标转换、手眼标定和执行误差。'],
  ['缺陷样本少且正常样本充足', 'PatchCore / PaDiM / Anomalib', '正常样本需要覆盖批次、光照和工况波动。'],
  ['前期数据集准备', 'SAM / SAM 2 辅助标注', '适合提高标注效率，生产判定仍需专用模型或规则。'],
];
