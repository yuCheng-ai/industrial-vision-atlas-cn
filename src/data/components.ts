export interface VisionComponent {
  name: string;
  type: string;
  goodFor: string[];
  keyParams: string[];
  avoid: string[];
}

export const components: VisionComponent[] = [
  {
    name: "面阵相机",
    type: "相机",
    goodFor: ["静态工件", "外观检测", "尺寸测量", "OCR"],
    keyParams: ["分辨率", "帧率", "快门类型", "传感器尺寸"],
    avoid: ["连续高速材料扫描"],
  },
  {
    name: "线扫相机",
    type: "相机",
    goodFor: ["卷材", "高速产线", "连续材料"],
    keyParams: ["线频", "分辨率", "同步方式"],
    avoid: ["低速简单检测"],
  },
  {
    name: "远心镜头",
    type: "镜头",
    goodFor: ["精密尺寸测量", "减少透视误差"],
    keyParams: ["放大倍率", "景深", "畸变"],
    avoid: ["普通低成本外观检测"],
  },
  {
    name: "环形光",
    type: "光源",
    goodFor: ["表面照明", "常规检测"],
    keyParams: ["角度", "颜色", "亮度"],
    avoid: ["强反光复杂表面"],
  },
  {
    name: "背光",
    type: "光源",
    goodFor: ["轮廓检测", "尺寸测量", "透明件边缘"],
    keyParams: ["均匀性", "尺寸匹配"],
    avoid: ["需要表面纹理信息"],
  },
];
