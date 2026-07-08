export interface VisionModelFamily {
  name: string;
  category: string;
  bestFor: string[];
  typicalModels: string[];
  dataNeed: string;
  deployment: string[];
  source: string;
}

export const modelFamilies: VisionModelFamily[] = [
  {
    name: '规则视觉 / 传统图像处理',
    category: '传统视觉',
    bestFor: ['尺寸测量', '边缘定位', '有无检测', '孔位检测', '几何关系判断'],
    typicalModels: ['阈值分割', '边缘检测', 'Blob 分析', '模板匹配', '形态学', '亚像素测量'],
    dataNeed: '主要依赖稳定成像、标定和参数调试，一般不需要大规模标注数据。',
    deployment: ['OpenCV', 'HALCON', 'VisionPro', '智能相机'],
    source: 'OpenCV 文档：imgproc、calib3d、features2d、objdetect 等模块',
  },
  {
    name: '目标检测',
    category: '检测',
    bestFor: ['零件定位', '有无检测', '装配缺失', '目标计数', '机器人粗定位'],
    typicalModels: ['YOLO 系列', 'RT-DETR', 'SSD', 'Faster R-CNN'],
    dataNeed: '需要按类别标注检测框；小目标、遮挡、反光和姿态变化会提高样本要求。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO', 'NCNN', 'RKNN'],
    source: 'Ultralytics Docs / OpenCV DNN / ONNX Runtime 文档',
  },
  {
    name: '实例分割 / 语义分割',
    category: '分割',
    bestFor: ['缺陷区域分割', '胶路检测', '焊缝区域', '污渍面积', '异物轮廓'],
    typicalModels: ['U-Net', 'Mask R-CNN', 'DeepLab', 'SegFormer', 'YOLO-Seg'],
    dataNeed: '需要 mask 标注。区域边界不清晰、缺陷对比度低或标注标准不一致时，模型稳定性会下降。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    source: 'OpenCV / Ultralytics segmentation documentation / 常见分割模型论文',
  },
  {
    name: '异常检测 / 缺陷检测',
    category: '异常检测',
    bestFor: ['缺陷样本少', '外观异常', '纹理缺陷', '新缺陷发现', '正常样本充足'],
    typicalModels: ['PatchCore', 'PaDiM', 'FastFlow', 'DRAEM', 'STFPM', 'Anomalib'],
    dataNeed: '通常需要覆盖充分的正常样本；批次、光照、材质和工况变化需要纳入样本范围。',
    deployment: ['OpenVINO', 'ONNX Runtime', 'TensorRT'],
    source: 'Anomalib 官方仓库与文档',
  },
  {
    name: 'OCR / OCV / 读码',
    category: '识别',
    bestFor: ['喷码识别', '标签字符', '序列号', '日期批号', '印刷字符验证', '条码和二维码读取'],
    typicalModels: ['PaddleOCR', 'PP-OCR 系列', 'CRNN', 'SVTR', 'DBNet', '传统读码算法'],
    dataNeed: '需要覆盖字体、字符高度、角度、反光、模糊、批次差异和字符缺损情况。',
    deployment: ['Paddle Inference', 'ONNX Runtime', 'OpenVINO', 'TensorRT', '智能读码器'],
    source: 'PaddleOCR 官方仓库 / OpenCV text 与 barcode 相关模块',
  },
  {
    name: '辅助标注 / 交互式分割',
    category: '数据准备',
    bestFor: ['快速标注', '辅助生成 mask', '样本整理', '缺陷区域预标注'],
    typicalModels: ['SAM', 'SAM 2', '交互式分割工具'],
    dataNeed: '用于提升标注效率；产线判定仍需结合专用规则、专用模型和验收数据。',
    deployment: ['离线标注工具', 'GPU 工作站', '数据集管理平台'],
    source: 'Segment Anything / SAM 2 官方资料',
  },
  {
    name: '姿态估计 / 关键点',
    category: '定位',
    bestFor: ['装配孔位', '零件姿态', '抓取点估计', '方向判断'],
    typicalModels: ['关键点检测', 'YOLO-Pose', 'HRNet', 'Keypoint R-CNN'],
    dataNeed: '需要关键点标注；遮挡、反光和关键点定义不一致会影响定位结果。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    source: 'Ultralytics pose documentation / OpenCV calib3d',
  },
  {
    name: '3D 点云 / 高度图处理',
    category: '3D视觉',
    bestFor: ['高度检测', '胶路检测', '焊缝检测', '体积测量', '形变检测'],
    typicalModels: ['点云拟合', '高度图分析', '轮廓拟合', 'PointNet 系列', '结构光处理'],
    dataNeed: '需要 3D 数据、标定数据和稳定采集条件；验收重点包括 Z 向精度、点云完整率和采集节拍。',
    deployment: ['3D 相机 SDK', 'Open3D', 'PCL', 'OpenCV calib3d / rgbd / structured_light'],
    source: 'OpenCV calib3d、rgbd、structured_light 模块 / 3D 相机厂商文档',
  },
];
