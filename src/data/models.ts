export interface VisionModelFamily {
  name: string;
  category: string;
  bestFor: string[];
  typicalModels: string[];
  keyParameters: string[];
  performanceMetrics: string[];
  dataNeed: string;
  deployment: string[];
  source: string;
}

export interface ModelCatalogItem {
  name: string;
  type: string;
  description: string;
  input: string;
  output: string;
  parameters: string[];
  metrics: string[];
  useCases: string[];
  limits: string[];
  source: string;
}

export const modelFamilies: VisionModelFamily[] = [
  {
    name: '规则视觉 / 传统图像处理',
    category: '传统视觉',
    bestFor: ['尺寸测量', '边缘定位', '有无检测', '孔位检测', '几何关系判断'],
    typicalModels: ['阈值分割', '边缘检测', 'Blob 分析', '模板匹配', '形态学', '亚像素测量'],
    keyParameters: ['ROI 区域', '阈值范围', '滤波核尺寸', '边缘算子', '模板相似度', '标定比例', '畸变校正参数'],
    performanceMetrics: ['重复精度', '测量误差', '误判率', '漏检率', '单帧处理时间', '参数稳定范围'],
    dataNeed: '主要依赖稳定成像、标定和参数调试，一般不需要大规模标注数据。',
    deployment: ['OpenCV', 'HALCON', 'VisionPro', '智能相机'],
    source: 'OpenCV 官方文档：imgproc、calib3d、features2d、objdetect 模块',
  },
  {
    name: '目标检测',
    category: '检测',
    bestFor: ['零件定位', '有无检测', '装配缺失', '目标计数', '机器人粗定位'],
    typicalModels: ['YOLO 系列', 'RT-DETR', 'SSD', 'Faster R-CNN'],
    keyParameters: ['输入尺寸', '类别数', '检测框标注质量', '置信度阈值', 'IoU 阈值', 'NMS 参数', '增强策略', '批量大小'],
    performanceMetrics: ['Precision', 'Recall', 'mAP50', 'mAP50-95', 'IoU', 'F1 Score', 'FPS', '端到端延迟'],
    dataNeed: '需要按类别标注检测框；小目标、遮挡、反光和姿态变化会提高样本要求。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO', 'NCNN', 'RKNN'],
    source: 'Ultralytics YOLO performance metrics / model validation 文档；ONNX Runtime 性能文档',
  },
  {
    name: '实例分割 / 语义分割',
    category: '分割',
    bestFor: ['缺陷区域分割', '胶路检测', '焊缝区域', '污渍面积', '异物轮廓'],
    typicalModels: ['U-Net', 'Mask R-CNN', 'DeepLab', 'SegFormer', 'YOLO-Seg'],
    keyParameters: ['输入尺寸', 'Mask 标注质量', '类别数', '损失函数', '后处理阈值', '最小区域面积', '边界平滑参数'],
    performanceMetrics: ['Mask IoU', 'Dice/F1', 'mAP mask', '像素级 Precision/Recall', '边界误差', '推理延迟'],
    dataNeed: '需要 mask 标注。区域边界不清晰、缺陷对比度低或标注标准不一致时，模型稳定性会下降。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    source: 'Ultralytics segmentation 文档；OpenCV 图像处理文档；常见分割模型论文',
  },
  {
    name: '异常检测 / 缺陷检测',
    category: '异常检测',
    bestFor: ['缺陷样本少', '外观异常', '纹理缺陷', '新缺陷发现', '正常样本充足'],
    typicalModels: ['PatchCore', 'PaDiM', 'FastFlow', 'DRAEM', 'STFPM', 'Anomalib'],
    keyParameters: ['正常样本覆盖范围', '特征提取骨干', 'Patch 尺寸', '异常分数阈值', '热力图分辨率', '后处理方式'],
    performanceMetrics: ['AUROC', 'AUPR', 'AUPRO', 'F1 Score', 'F1Max', 'PRO', '误报率', '漏检率'],
    dataNeed: '通常需要覆盖充分的正常样本；批次、光照、材质和工况变化需要纳入样本范围。',
    deployment: ['OpenVINO', 'ONNX Runtime', 'TensorRT'],
    source: 'Anomalib 官方 Metrics 文档；OpenVINO / Anomalib 部署资料',
  },
  {
    name: 'OCR / OCV / 读码',
    category: '识别',
    bestFor: ['喷码识别', '标签字符', '序列号', '日期批号', '印刷字符验证', '条码和二维码读取'],
    typicalModels: ['PaddleOCR', 'PP-OCR 系列', 'CRNN', 'SVTR', 'DBNet', '传统读码算法'],
    keyParameters: ['字符高度', '输入分辨率', '检测框阈值', '识别字典', '字符集', '方向分类', '置信度阈值', '后处理规则'],
    performanceMetrics: ['字符识别率', '字段准确率', '误读率', '漏读率', '端到端耗时', '低质量字符通过率'],
    dataNeed: '需要覆盖字体、字符高度、角度、反光、模糊、批次差异和字符缺损情况。',
    deployment: ['Paddle Inference', 'ONNX Runtime', 'OpenVINO', 'TensorRT', '智能读码器'],
    source: 'PaddleOCR 官方仓库与技术报告；OpenCV text / barcode 相关模块',
  },
  {
    name: '辅助标注 / 交互式分割',
    category: '数据准备',
    bestFor: ['快速标注', '辅助生成 mask', '样本整理', '缺陷区域预标注'],
    typicalModels: ['SAM', 'SAM 2', '交互式分割工具'],
    keyParameters: ['提示类型', '点提示', '框提示', 'Mask 选择', '输入分辨率', '模型 checkpoint', '人工修正次数'],
    performanceMetrics: ['标注耗时', 'Mask IoU', '人工修正次数', '边界质量', '吞吐量', '显存占用'],
    dataNeed: '用于提升标注效率；产线判定仍需结合专用规则、专用模型和验收数据。',
    deployment: ['离线标注工具', 'GPU 工作站', '数据集管理平台'],
    source: 'Meta SAM / SAM 2 官方仓库与论文资料',
  },
  {
    name: '姿态估计 / 关键点',
    category: '定位',
    bestFor: ['装配孔位', '零件姿态', '抓取点估计', '方向判断'],
    typicalModels: ['关键点检测', 'YOLO-Pose', 'HRNet', 'Keypoint R-CNN'],
    keyParameters: ['关键点定义', '关键点标注一致性', '输入尺寸', '置信度阈值', '坐标转换', '相机外参', '手眼标定参数'],
    performanceMetrics: ['关键点误差', 'OKS/PCK', '角度误差', '抓取点误差', '定位重复性', '推理延迟'],
    dataNeed: '需要关键点标注；遮挡、反光和关键点定义不一致会影响定位结果。',
    deployment: ['ONNX Runtime', 'TensorRT', 'OpenVINO'],
    source: 'Ultralytics pose 文档；OpenCV calib3d / solvePnP / hand-eye calibration 文档',
  },
  {
    name: '3D 点云 / 高度图处理',
    category: '3D视觉',
    bestFor: ['高度检测', '胶路检测', '焊缝检测', '体积测量', '形变检测'],
    typicalModels: ['点云拟合', '高度图分析', '轮廓拟合', 'PointNet 系列', '结构光处理'],
    keyParameters: ['Z 向分辨率', '点云密度', '曝光与投光参数', '标定参数', '滤波半径', '拟合阈值', '缺失点处理'],
    performanceMetrics: ['Z 向重复精度', '点云完整率', '高度误差', '轮廓误差', '处理时间', '无效点比例'],
    dataNeed: '需要 3D 数据、标定数据和稳定采集条件；验收重点包括 Z 向精度、点云完整率和采集节拍。',
    deployment: ['3D 相机 SDK', 'Open3D', 'PCL', 'OpenCV calib3d / rgbd / structured_light'],
    source: 'OpenCV calib3d、rgbd、structured_light 模块；3D 相机厂商文档',
  },
];

export const modelCatalog: ModelCatalogItem[] = [
  {
    name: 'YOLO 系列',
    type: '实时目标检测模型',
    description: 'YOLO 系列用于在图像中同时输出目标类别和检测框位置。工业场景中常用于缺件检测、零件计数、目标粗定位和机器人前置定位。',
    input: '二维图像；训练时需要类别标签和检测框标注。',
    output: '类别、检测框坐标、置信度；部分版本支持分割、姿态估计和旋转框。',
    parameters: ['输入尺寸', '类别数', '置信度阈值', 'IoU 阈值', 'NMS 参数', '增强策略', '模型规模', '推理后端'],
    metrics: ['Precision', 'Recall', 'mAP50', 'mAP50-95', 'FPS', 'Latency', '模型大小'],
    useCases: ['装配缺失', '目标计数', '零件定位', '机器人粗定位', '包装检测'],
    limits: ['检测框不能替代精密测量边缘', '小目标依赖分辨率和标注质量', '反光和遮挡会影响稳定性'],
    source: 'Ultralytics Docs：YOLO tasks、model validation、performance metrics',
  },
  {
    name: 'RT-DETR',
    type: '实时 Transformer 目标检测模型',
    description: 'RT-DETR 属于实时检测模型路线，使用 Transformer 检测框架并面向实时推理场景。资料库中作为检测模型类别记录，不作为默认方案。',
    input: '二维图像；训练时需要类别和检测框标注。',
    output: '类别、检测框坐标、置信度。',
    parameters: ['输入尺寸', '查询数量', '类别数', '置信度阈值', '训练轮次', '推理后端'],
    metrics: ['mAP', 'Precision', 'Recall', 'FPS', 'Latency', '显存占用'],
    useCases: ['目标检测', '缺件判断', '多类别定位'],
    limits: ['工程部署需要核对目标硬件上的实际延迟', '小目标和密集目标仍需独立验证'],
    source: 'RT-DETR 官方资料 / Ultralytics RT-DETR 文档',
  },
  {
    name: 'U-Net',
    type: '语义分割模型',
    description: 'U-Net 常用于像素级分割任务。工业视觉中可用于缺陷区域、胶路区域、焊缝区域或纹理区域提取。',
    input: '二维图像；训练时需要像素级 mask 标注。',
    output: '像素级类别图或前景/背景 mask。',
    parameters: ['输入尺寸', 'Mask 标注质量', '损失函数', '类别数', '后处理阈值', '最小区域面积'],
    metrics: ['IoU', 'Dice/F1', '像素级 Precision', '像素级 Recall', '边界误差', '推理耗时'],
    useCases: ['污渍面积', '胶路区域', '焊缝区域', '缺陷轮廓'],
    limits: ['边界成像不清晰时标注和预测都不稳定', '标注标准不一致会影响复现性'],
    source: 'U-Net 原始论文 / OpenCV segmentation 相关资料 / 分割模型通用指标',
  },
  {
    name: 'Mask R-CNN',
    type: '实例分割模型',
    description: 'Mask R-CNN 在目标检测基础上增加实例 mask 输出，适合区分多个独立目标或多个缺陷区域。',
    input: '二维图像；训练时需要类别、检测框和实例 mask。',
    output: '类别、检测框、实例 mask、置信度。',
    parameters: ['类别数', 'Anchor / RoI 设置', 'Mask 分辨率', '置信度阈值', 'NMS 阈值'],
    metrics: ['bbox mAP', 'mask mAP', 'IoU', 'Precision', 'Recall', '推理延迟'],
    useCases: ['多个异物分割', '缺陷实例统计', '零件轮廓分割'],
    limits: ['训练和推理成本高于简单规则算法', 'mask 标注成本较高'],
    source: 'Mask R-CNN 论文 / COCO mask AP 指标体系 / OpenCV DNN 示例资料',
  },
  {
    name: 'PaddleOCR / PP-OCR 系列',
    type: 'OCR 模型体系',
    description: 'PaddleOCR 是文本检测、文本识别和文档结构化工具体系。工业场景中主要用于喷码、标签、序列号、日期批号和印刷字符识别。',
    input: '包含字符区域的图像；训练时需要文本框、文本内容或识别标签。',
    output: '文本位置、识别字符串、置信度；可结合 OCV 规则验证字符是否符合模板。',
    parameters: ['字符高度', '检测阈值', '识别字典', '字符集', '方向分类', '输入分辨率', '后处理规则'],
    metrics: ['字符识别率', '字段准确率', '误读率', '漏读率', '端到端耗时', '低质量字符通过率'],
    useCases: ['喷码识别', '日期批号', '序列号', '标签字符', '印刷字符验证'],
    limits: ['反光、运动模糊和字符高度不足会显著影响结果', '误读风险需要业务规则复核'],
    source: 'PaddleOCR 官方仓库与 PP-OCR 技术报告',
  },
  {
    name: 'PatchCore',
    type: '异常检测模型',
    description: 'PatchCore 使用正常样本特征建立记忆库，通过局部 patch 特征距离判断异常位置，常用于坏品样本较少的外观检测。',
    input: '正常样本图像；验证时输入待检测图像。',
    output: '图像级异常分数、像素级异常热力图、异常区域。',
    parameters: ['特征提取骨干', 'Patch 尺寸', '记忆库采样比例', '异常阈值', '热力图后处理'],
    metrics: ['AUROC', 'AUPR', 'AUPRO', 'F1Max', '误报率', '漏检率'],
    useCases: ['纹理异常', '表面缺陷', '未知缺陷发现', '少缺陷样本场景'],
    limits: ['正常样本覆盖不足会导致误报', '批次、光照和材质变化需要纳入正常样本范围'],
    source: 'Anomalib PatchCore 文档 / PatchCore 论文 / Anomalib Metrics 文档',
  },
  {
    name: 'PaDiM / FastFlow / DRAEM',
    type: '异常检测模型组',
    description: '这类模型用于正常样本建模、密度估计、流模型或重建式异常检测。资料库中按异常检测模型组记录。',
    input: '正常样本或正常/异常样本组合，视具体方法而定。',
    output: '异常分数、异常热力图、缺陷区域。',
    parameters: ['特征层选择', '异常阈值', '输入尺寸', '热力图平滑', '后处理规则'],
    metrics: ['AUROC', 'AUPR', 'AUPRO', 'F1 Score', 'PRO', '推理时间'],
    useCases: ['表面缺陷', '纹理异常', '外观异常'],
    limits: ['现场波动大时需要严格验证阈值稳定性', '异常热力图不等同于尺寸测量结果'],
    source: 'Anomalib 官方模型与 Metrics 文档',
  },
  {
    name: 'SAM / SAM 2',
    type: '视觉基础模型 / 交互式分割模型',
    description: 'SAM 系列是可提示分割模型，可通过点、框或 mask 提示生成分割结果。工业场景中更适合作为标注和数据准备工具。',
    input: '图像或视频帧，以及点、框、mask 等提示。',
    output: '候选 mask、分割边界、置信相关信息。',
    parameters: ['提示类型', '输入分辨率', '模型 checkpoint', 'Mask 选择策略', '人工修正次数', '显存预算'],
    metrics: ['Mask IoU', '边界质量', '标注耗时', '人工修正次数', '吞吐量', '显存占用'],
    useCases: ['辅助标注', '样本整理', '缺陷区域预标注', '交互式分割'],
    limits: ['小缺陷和低对比边界需要人工复核', '产线判定通常仍需专用模型或规则'],
    source: 'Meta Segment Anything / Segment Anything 2 官方仓库与论文',
  },
  {
    name: 'YOLO-Pose / Keypoint R-CNN',
    type: '关键点 / 姿态估计模型',
    description: '关键点模型输出预定义点位坐标，用于姿态、角度、抓取点或装配位置表达。工业应用中需要与相机标定和坐标转换结合。',
    input: '二维图像；训练时需要关键点坐标和可见性标注。',
    output: '关键点坐标、关键点置信度、目标框或姿态信息。',
    parameters: ['关键点定义', '输入尺寸', '置信度阈值', '坐标系转换', '相机外参', '手眼标定参数'],
    metrics: ['关键点误差', 'OKS/PCK', '角度误差', '抓取点误差', '定位重复性', '推理延迟'],
    useCases: ['抓取点估计', '零件姿态', '孔位定位', '方向判断'],
    limits: ['关键点不可见或定义不稳定时结果不可靠', '模型输出坐标需经过标定链路才能进入机器人控制'],
    source: 'Ultralytics Pose 文档 / OpenCV calib3d、solvePnP、hand-eye calibration 文档',
  },
  {
    name: 'PointNet 系列 / 点云深度模型',
    type: '3D 点云模型',
    description: 'PointNet 系列用于点云分类、分割或特征提取。工业 3D 检测中还常与传统点云拟合、高度图分析和轮廓算法结合。',
    input: '点云、深度图或高度图；训练时需要 3D 标签、区域标注或类别标签。',
    output: '点云类别、点级标签、区域分割结果或形貌特征。',
    parameters: ['点云密度', '采样点数', 'Z 向分辨率', '标定参数', '滤波半径', '缺失点处理'],
    metrics: ['Z 向重复精度', '点云完整率', '高度误差', '轮廓误差', 'mIoU', '处理时间'],
    useCases: ['胶路检测', '焊缝轮廓', '高度检测', '体积测量', '形变检测'],
    limits: ['点云缺失、反光材质和遮挡会影响结果', '需要单独评估采集节拍和 Z 向精度'],
    source: 'PointNet 论文 / Open3D、PCL、OpenCV rgbd 与 structured_light 资料 / 3D 相机厂商文档',
  },
];
