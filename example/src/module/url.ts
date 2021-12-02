export const url = {
  imgDelay(delay: number = 3000): string {
    return `http://139.198.125.20:8080/delayImage?url=https%3A%2F%2Fimg1.baidu.com%2Fit%2Fu%3D3172552880%2C2018377955%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D500&delay=${delay}`
  },
};
