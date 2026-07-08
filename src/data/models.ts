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
    dataNeed: '通常不需要大量标注图，重点是稳定光学和参数调试。',
    deployment: ['OpenCV', 'HALCON', 'VisionPro', '智能相机'],
    note: '工业现场能用规则视觉解决的，不要先上深度学习。',
  },
  {
    name: 'YOLO / 实时目标检测',
    category: '目标检测',
    bestFor: ['零件定位', '有无检测', '装配缺失', '目标计数', '机器人粗定位'],
    typicalModels: ['YOLOv8', 'YOLO11', 'YOLO26', 'RT-DETR', 'YOLOX'],
    useWhen: ['要框出目标位置', '类别明确', '需要实时性', '样本可标框'],
    avoidWhen: ['只需要精密尺寸测量', '目标边界必须像素级准确', '缺陷极小且成像不稳定'],
    dataNeed: '需要按类别标注检测框；小目标要特别注意分辨率、标注质量和增强策略。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO', 'NCNN', 'RKNN'],
    note: '适合“看见并框出来”，不等于适合所有外观缺陷。',
  },
  {
    name: '实例分割 / 语义分割',
    category: '分割',
    bestFor: ['缺陷区域分割', '胶路检测', '焊缝区域', '污渍面积', '异物轮廓'],
    typicalModels: ['YOLO-Seg', 'Mask R-CNN', 'U-Net', 'DeepLab', 'SegFormer'],
    useWhen: ['需要像素级区域', '要计算面积、长度、轮廓', '缺陷边界影响判定'],
    avoidWhen: ['只需要有无判断', '标注成本无法接受', '边界本身看不清'],
    dataNeed: '需要 mask 标注；标注成本比检测框高，适合高价值缺陷。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    note: '分割的前提是图像里缺陷边界本身可被稳定成像。',
  },
  {
    name: '异常检测 / 少样本缺陷检测',
    category: '异常检测',
    bestFor: ['样本缺陷少', '外观异常', '纹理缺陷', '新缺陷发现', '正常样本充足'],
    typicalModels: ['PatchCore', 'PaDiM', 'FastFlow', 'DRAEM', 'STFPM', 'Anomalib'],
    useWhen: ['坏品样本少', '缺陷类型不固定', '正常样本容易收集', '需要热力图定位'],
    avoidWhen: ['正常品波动很大', '缺陷与正常差异极小', '光学不稳定导致伪异常'],
    dataNeed: '通常需要大量正常样本，少量或不需要缺陷样本；仍要做现场波动覆盖。',
    deployment: ['OpenVINO', 'ONNX Runtime', 'TensorRT'],
    note: '异常检测不是万能，光源变化和批次变化会直接影响误检率。',
  },
  {
    name: 'OCR / OCV 字符识别',
    category: 'OCR',
    bestFor: ['喷码识别', '标签字符', '序列号', '日期批号', '印刷字符验证'],
    typicalModels: ['PaddleOCR', 'PP-OCRv5', 'CRNN', 'SVTR', 'DBNet'],
    useWhen: ['字符清晰', '需要读出内容', '需要字符正确性验证', '码制或字体变化较多'],
    avoidWhen: ['字符成像反光严重', '字符高度太小', '运动模糊没有解决'],
    dataNeed: '需要覆盖字体、角度、模糊、反光、批次变化；OCV 可先定义模板和规则。',
    deployment: ['Paddle Inference', 'ONNX Runtime', 'OpenVINO', 'TensorRT'],
    note: 'OCR 失败多数先看光源、焦距、字符高度和运动模糊。',
  },
  {
    name: 'SAM / 交互式分割基础模型',
    category: '基础模型',
    bestFor: ['快速标注', '辅助生成 mask', '交互式分割', '前期样本整理'],
    typicalModels: ['SAM', 'SAM 2'],
    useWhen: ['想加快标注', '对象边界相对清楚', '需要人工交互修正', '做数据集准备'],
    avoidWhen: ['要求无人值守实时判定', '工业缺陷很小', '边界依赖特殊光学'],
    dataNeed: '更多用于标注和前处理；生产判定通常还要训练专用模型或规则。',
    deployment: ['离线标注工具', 'GPU 工作站', '半自动数据平台'],
    note: 'SAM 更像“标注和分割工具底座”，不是直接替代工业检测模型。',
  },
  {
    name: '姿态估计 / 关键点',
    category: '定位',
    bestFor: ['装配孔位', '零件姿态', '人体/机械臂动作', '抓取点估计'],
    typicalModels: ['YOLO-Pose', 'HRNet', 'OpenPose', 'Keypoint R-CNN'],
    useWhen: ['目标不是一个框，而是关键点位置', '需要角度、姿态、抓取点'],
    avoidWhen: ['关键点不可见', '遮挡严重', '精度要求超过成像能力'],
    dataNeed: '需要关键点标注，且标注一致性很关键。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    note: '工业抓取里常与相机标定、手眼标定一起使用。',
  },
  {
    name: '3D 点云 / 高度图算法',
    category: '3D视觉',
    bestFor: ['高度检测', '胶路检测', '焊缝检测', '体积测量', '形变检测'],
    typicalModels: ['PointNet++', 'PointNet', '传统点云拟合', '高度图 CNN', '轮廓拟合'],
    useWhen: ['2D 灰度无法表达高度', '需要 Z 向尺寸', '缺陷是形貌变化'],
    avoidWhen: ['节拍过快但 3D 采集不足', '遮挡严重', '表面材质导致点云缺失'],
    dataNeed: '需要 3D 数据、标定数据和稳定采集条件；验收重点是 Z 精度和点云完整率。',
    deployment: ['3D 相机 SDK', 'Open3D', 'PCL', '工控机'],
    note: '3D 不是更高级的 2D，而是另一套采集、标定和验收体系。',
  },
];

export const modelSelectionRules = [
  ['尺寸测量 / 孔位 / 间隙', '传统视觉 + 背光 + 远心镜头', '不要先上 YOLO，先保证边缘和标定。'],
  ['有无检测 / 装配缺失 / 计数', 'YOLO / 模板匹配 / Blob', '目标规则清楚时传统视觉更省；变化大时用检测模型。'],
  ['划痕 / 污渍 / 异物 / 表面缺陷', '异常检测 / 分割模型 / 传统纹理算法', '先做打光实验，不要只靠模型硬识别。'],
  ['喷码 / 标签 / 字符', 'PaddleOCR / OCV / 传统读码', '先保证字符高度、对焦、反光和运动模糊。'],
  ['胶路 / 焊缝 / 高度 / 形变', '3D 轮廓 / 高度图 / 点云算法', '2D 看不出高度时才切 3D。'],
  ['机器人抓取 / 定位 / 姿态', '目标检测 + 关键点 + 标定', '模型只输出位置，最终还要坐标转换和执行验证。'],
  ['样本少但正常品多', 'PatchCore / PaDiM / Anomalib', '正常样本要覆盖批次、光照和工况波动。'],
  ['前期快速做数据集', 'SAM / SAM 2 辅助标注', '更适合标注加速，不建议直接当产线判定模型。'],
];
