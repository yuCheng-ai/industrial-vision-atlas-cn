export interface VisionScenario {
  title: string;
  category: string;
  object: string[];
  imaging: string[];
  lighting: string[];
  camera: string[];
  algorithm: string[];
  avoid: string[];
}

export const scenarios: VisionScenario[] = [
  {
    title: "外观缺陷检测",
    category: "检测",
    object: ["划痕", "污渍", "裂纹", "异物", "表面异常"],
    imaging: ["2D 面阵", "必要时 3D"],
    lighting: ["暗场光", "穹顶光", "偏振光"],
    camera: ["高分辨率工业相机", "全局快门"],
    algorithm: ["传统视觉", "异常检测", "缺陷分类"],
    avoid: ["只提高相机像素，不解决光学"],
  },
  {
    title: "尺寸测量",
    category: "测量",
    object: ["长度", "宽度", "孔位", "间隙", "轮廓"],
    imaging: ["背光成像", "远心视觉"],
    lighting: ["背光", "稳定漫射光"],
    camera: ["高稳定工业相机"],
    algorithm: ["边缘检测", "几何测量", "标定"],
    avoid: ["忽略镜头畸变和机械稳定性"],
  },
  {
    title: "OCR / 条码识别",
    category: "识别",
    object: ["字符", "二维码", "标签", "喷码"],
    imaging: ["2D 面阵"],
    lighting: ["同轴光", "均匀面光"],
    camera: ["高速工业相机"],
    algorithm: ["OCR", "字符定位", "深度学习识别"],
    avoid: ["不处理反光和字符对比度"],
  },
  {
    title: "机器人定位",
    category: "定位",
    object: ["抓取", "姿态", "坐标定位"],
    imaging: ["2D 定位", "3D视觉"],
    lighting: ["稳定补光"],
    camera: ["工业相机", "3D相机"],
    algorithm: ["目标检测", "姿态估计", "标定"],
    avoid: ["忽略坐标系转换"],
  },
  {
    title: "连续材料检测",
    category: "高速检测",
    object: ["钢带", "薄膜", "纸张", "极片"],
    imaging: ["线扫相机"],
    lighting: ["线光源", "高速同步光源"],
    camera: ["线阵工业相机"],
    algorithm: ["拼接", "缺陷检测"],
    avoid: ["按普通相机方案设计"],
  },
];
