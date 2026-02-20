export class Meteor {
  static PYTHON = {
    name: 'Python',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'rgba(255, 212, 59, 0.8)'
  };

  static CONFIG = {
    ICON_SIZE: 38,
    TRAIL_LENGTH: 120,
    BASE_SPEED: 850,
    TRAIL_ANGLE: 0.35,
    FADE_SPEED: 0.7,
    LINE_WIDTH: 2,
    SHADOW_BLUR: 8,
    ICON_SHADOW_BLUR: 15,
    MIN_WAIT_TIME: 5000,
    MAX_WAIT_TIME: 10000,
  };

  static imageLoaded = false;
  static loadedImage = null;
  static gradient = null;

  static async preloadImage() {
    if (this.imageLoaded) return;

    await new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        this.loadedImage = img;
        this.imageLoaded = true;
        resolve();
      };
      img.onerror = () => {
        console.warn('Failed to load Python icon');
        resolve();
      };
      img.src = this.PYTHON.url;
    });
  }

  static clearGradientCache() {
    this.gradient = null;
  }

  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.halfIconSize = Meteor.CONFIG.ICON_SIZE / 2;
    this.trailEndX = Meteor.CONFIG.TRAIL_LENGTH;
    this.trailEndY = -Meteor.CONFIG.TRAIL_LENGTH * Meteor.CONFIG.TRAIL_ANGLE;
    this.reset(true);
  }

  #getGradient() {
    if (!Meteor.gradient) {
      const gradient = this.ctx.createLinearGradient(
        0, 0,
        this.trailEndX,
        this.trailEndY
      );
      gradient.addColorStop(0, Meteor.PYTHON.color);
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      Meteor.gradient = gradient;
    }
    return Meteor.gradient;
  }

  reset(initial = false) {
    this.x = this.canvas.width + Math.random() * 200;
    this.y = this.canvas.height * Math.random() * 0.4;
    this.alpha = 1;
    this.active = false;
    this.waitTime = initial
      ? 3000
      : Meteor.CONFIG.MIN_WAIT_TIME + Math.random() * (Meteor.CONFIG.MAX_WAIT_TIME - Meteor.CONFIG.MIN_WAIT_TIME) + 3000;
    this.lastTime = performance.now();
  }

  update(time) {
    const deltaTime = (time - this.lastTime) / 1000;
    this.lastTime = time;

    if (!this.active) {
      this.waitTime -= deltaTime * 1000;
      if (this.waitTime <= 0) this.active = true;
      return;
    }

    const movement = Meteor.CONFIG.BASE_SPEED * deltaTime;
    this.x -= movement;
    this.y += movement * Meteor.CONFIG.TRAIL_ANGLE;
    this.alpha -= deltaTime * Meteor.CONFIG.FADE_SPEED;

    if (this.alpha <= 0 || this.x < -Meteor.CONFIG.TRAIL_LENGTH) {
      this.reset();
    }
  }

  draw() {
    if (!this.active || this.alpha <= 0) return;

    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);

    // Trail
    ctx.strokeStyle = this.#getGradient();
    ctx.lineWidth = Meteor.CONFIG.LINE_WIDTH;
    ctx.lineCap = 'round';
    ctx.shadowBlur = Meteor.CONFIG.SHADOW_BLUR;
    ctx.shadowColor = Meteor.PYTHON.color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.trailEndX, this.trailEndY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Icon
    if (Meteor.imageLoaded) {
      ctx.shadowBlur = Meteor.CONFIG.ICON_SHADOW_BLUR;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.drawImage(Meteor.loadedImage, -this.halfIconSize, -this.halfIconSize, Meteor.CONFIG.ICON_SIZE, Meteor.CONFIG.ICON_SIZE);
    }

    ctx.restore();
  }

  isVisible() {
    return this.active &&
           this.x > -Meteor.CONFIG.TRAIL_LENGTH &&
           this.x < this.canvas.width + 200;
  }
}