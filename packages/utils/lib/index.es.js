var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
function stringOrBooleanCls(value, prefix) {
  const isBoolean = typeof value === "boolean";
  let result;
  if (value !== void 0) {
    result = isBoolean ? prefix : `${prefix}-${value}`;
  }
  return result;
}
function booleanCls(value, cls) {
  let result;
  if (value !== void 0) {
    result = value ? cls == null ? void 0 : cls.trueCls : cls == null ? void 0 : cls.falseCls;
  }
  return result;
}
const AccessibilityClassNames = (props) => {
  const { srOnly } = props;
  return classNames(booleanCls(srOnly, { trueCls: "sr-only", falseCls: "not-sr-only" }));
};
const BackgroundsClassNames = (props) => {
  const {
    bgAttachment,
    bgClip,
    bgColor,
    bgOrigin,
    bgPosition,
    bgRepeat,
    bgSize,
    bgGradientDirection,
    bgGradientFromColor,
    bgGradientViaColor,
    bgGradientToColor
  } = props;
  return classNames({
    [`bg-${bgAttachment}`]: bgAttachment,
    [`bg-clip-${bgClip}`]: bgClip,
    [`bg-${bgColor}`]: bgColor,
    [`bg-origin-${bgOrigin}`]: bgOrigin,
    [`bg-${bgPosition}`]: bgPosition,
    [`bg-${bgRepeat}`]: bgRepeat,
    [`bg-${bgSize}`]: bgSize,
    [`bg-gradient-${bgGradientDirection}`]: bgGradientDirection && bgGradientDirection !== "none",
    [`bg-none`]: bgGradientDirection === "none",
    [`from-${bgGradientFromColor}`]: bgGradientFromColor,
    [`via-${bgGradientViaColor}`]: bgGradientViaColor,
    [`to-${bgGradientToColor}`]: bgGradientToColor
  });
};
const BordersClassNames = (props) => {
  const {
    rounded,
    borderWidth,
    borderXWidth,
    borderYWidth,
    borderTWidth,
    borderRWidth,
    borderBWidth,
    borderLWidth,
    borderColor,
    borderStyle,
    divideXWidth,
    divideYWidth,
    divideColor,
    divideStyle,
    outlineWidth,
    outlineColor,
    outlineStyle,
    outlineOffset,
    ringWidth,
    ringColor,
    ringOffset,
    ringOffsetColor
  } = props;
  return classNames(stringOrBooleanCls(rounded, "rounded"), stringOrBooleanCls(borderWidth, "border"), stringOrBooleanCls(borderXWidth, "border-x"), stringOrBooleanCls(borderYWidth, "border-y"), stringOrBooleanCls(borderTWidth, "border-t"), stringOrBooleanCls(borderRWidth, "border-r"), stringOrBooleanCls(borderBWidth, "border-b"), stringOrBooleanCls(borderLWidth, "border-l"), stringOrBooleanCls(divideXWidth, "divide-x"), stringOrBooleanCls(divideYWidth, "divide-y"), stringOrBooleanCls(outlineWidth, "outline"), stringOrBooleanCls(ringWidth, "ring"), {
    [`border-${borderColor}`]: borderColor,
    [`border-${borderStyle}`]: borderStyle,
    [`divide-${divideColor}`]: divideColor,
    [`divide-${divideStyle}`]: divideStyle,
    [`outline-${outlineColor}`]: outlineColor,
    [`outline-${outlineStyle}`]: outlineStyle,
    [`outline-${outlineOffset}`]: outlineOffset,
    [`ring-${ringColor}`]: ringColor,
    [`ring-offset-${ringOffset}`]: ringOffset,
    [`ring-offset-${ringOffsetColor}`]: ringOffsetColor
  });
};
const colorCommon = ["inherit", "current", "transparent"];
const colorBlack = "black";
const colorWhite = "white";
const colorSlate = [
  "slate-50",
  "slate-100",
  "slate-200",
  "slate-300",
  "slate-400",
  "slate-500",
  "slate-600",
  "slate-700",
  "slate-800",
  "slate-900"
];
const colorGray = [
  "gray-50",
  "gray-100",
  "gray-200",
  "gray-300",
  "gray-400",
  "gray-500",
  "gray-600",
  "gray-700",
  "gray-800",
  "gray-900"
];
const colorZinc = [
  "zinc-50",
  "zinc-100",
  "zinc-200",
  "zinc-300",
  "zinc-400",
  "zinc-500",
  "zinc-600",
  "zinc-700",
  "zinc-800",
  "zinc-900"
];
const colorNeutral = [
  "neutral-50",
  "neutral-100",
  "neutral-200",
  "neutral-300",
  "neutral-400",
  "neutral-500",
  "neutral-600",
  "neutral-700",
  "neutral-800",
  "neutral-900"
];
const colorStone = [
  "stone-50",
  "stone-100",
  "stone-200",
  "stone-300",
  "stone-400",
  "stone-500",
  "stone-600",
  "stone-700",
  "stone-800",
  "stone-900"
];
const colorRed = [
  "red-50",
  "red-100",
  "red-200",
  "red-300",
  "red-400",
  "red-500",
  "red-600",
  "red-700",
  "red-800",
  "red-900"
];
const colorOrange = [
  "orange-50",
  "orange-100",
  "orange-200",
  "orange-300",
  "orange-400",
  "orange-500",
  "orange-600",
  "orange-700",
  "orange-800",
  "orange-900"
];
const colorAmber = [
  "amber-50",
  "amber-100",
  "amber-200",
  "amber-300",
  "amber-400",
  "amber-500",
  "amber-600",
  "amber-700",
  "amber-800",
  "amber-900"
];
const colorYellow = [
  "yellow-50",
  "yellow-100",
  "yellow-200",
  "yellow-300",
  "yellow-400",
  "yellow-500",
  "yellow-600",
  "yellow-700",
  "yellow-800",
  "yellow-900"
];
const colorLime = [
  "lime-50",
  "lime-100",
  "lime-200",
  "lime-300",
  "lime-400",
  "lime-500",
  "lime-600",
  "lime-700",
  "lime-800",
  "lime-900"
];
const colorEmerald = [
  "emerald-50",
  "emerald-100",
  "emerald-200",
  "emerald-300",
  "emerald-400",
  "emerald-500",
  "emerald-600",
  "emerald-700",
  "emerald-800",
  "emerald-900"
];
const colorTeal = [
  "teal-50",
  "teal-100",
  "teal-200",
  "teal-300",
  "teal-400",
  "teal-500",
  "teal-600",
  "teal-700",
  "teal-800",
  "teal-900"
];
const colorCyan = [
  "cyan-50",
  "cyan-100",
  "cyan-200",
  "cyan-300",
  "cyan-400",
  "cyan-500",
  "cyan-600",
  "cyan-700",
  "cyan-800",
  "cyan-900"
];
const colorSky = [
  "sky-50",
  "sky-100",
  "sky-200",
  "sky-300",
  "sky-400",
  "sky-500",
  "sky-600",
  "sky-700",
  "sky-800",
  "sky-900"
];
const colorBlue = [
  "blue-50",
  "blue-100",
  "blue-200",
  "blue-300",
  "blue-400",
  "blue-500",
  "blue-600",
  "blue-700",
  "blue-800",
  "blue-900"
];
const colorIndigo = [
  "indigo-50",
  "indigo-100",
  "indigo-200",
  "indigo-300",
  "indigo-400",
  "indigo-500",
  "indigo-600",
  "indigo-700",
  "indigo-800",
  "indigo-900"
];
const colorViolet = [
  "violet-50",
  "violet-100",
  "violet-200",
  "violet-300",
  "violet-400",
  "violet-500",
  "violet-600",
  "violet-700",
  "violet-800",
  "violet-900"
];
const colorPurple = [
  "purple-50",
  "purple-100",
  "purple-200",
  "purple-300",
  "purple-400",
  "purple-500",
  "purple-600",
  "purple-700",
  "purple-800",
  "purple-900"
];
const colorFuchsia = [
  "fuchsia-50",
  "fuchsia-100",
  "fuchsia-200",
  "fuchsia-300",
  "fuchsia-400",
  "fuchsia-500",
  "fuchsia-600",
  "fuchsia-700",
  "fuchsia-800",
  "fuchsia-900"
];
const colorPink = [
  "pink-50",
  "pink-100",
  "pink-200",
  "pink-300",
  "pink-400",
  "pink-500",
  "pink-600",
  "pink-700",
  "pink-800",
  "pink-900"
];
const colorRose = [
  "rose-50",
  "rose-100",
  "rose-200",
  "rose-300",
  "rose-400",
  "rose-500",
  "rose-600",
  "rose-700",
  "rose-800",
  "rose-900"
];
const colors = [
  colorBlack,
  colorWhite,
  ...colorSlate,
  ...colorGray,
  ...colorZinc,
  ...colorNeutral,
  ...colorStone,
  ...colorRed,
  ...colorOrange,
  ...colorAmber,
  ...colorYellow,
  ...colorLime,
  ...colorEmerald,
  ...colorTeal,
  ...colorCyan,
  ...colorSky,
  ...colorBlue,
  ...colorIndigo,
  ...colorViolet,
  ...colorPurple,
  ...colorFuchsia,
  ...colorPink,
  ...colorRose
];
const EffectsClassNames = (props) => {
  const { shadow, shadowColor, opacity, mixBlend, bgBlend } = props;
  return classNames(stringOrBooleanCls(shadow, "shadow"), {
    [`shadow-color-${shadowColor}`]: shadowColor,
    [`opacity-${opacity}`]: opacity,
    [`mix-blend-${mixBlend}`]: mixBlend,
    [`bg-blend-${bgBlend}`]: bgBlend
  });
};
const FiltersClassNames = (props) => {
  const {
    blur,
    brightness,
    contrast,
    dropShadow,
    grayscale,
    hueRotate,
    invert,
    saturate,
    sepia,
    backdropBlur,
    backdropBrightness,
    backdropContrast,
    backdropGrayscale,
    backdropHueRotate,
    backdropInvert,
    backdropOpacity,
    backdropSaturate,
    backdropSepia
  } = props;
  return classNames(stringOrBooleanCls(blur, "blur"), stringOrBooleanCls(backdropBlur, "backdrop-blur"), stringOrBooleanCls(dropShadow, "drop-shadow"), booleanCls(grayscale, { trueCls: "grayscale", falseCls: "grayscale-0" }), booleanCls(invert, { trueCls: "invert", falseCls: "invert-0" }), booleanCls(sepia, { trueCls: "sepia", falseCls: "sepia-0" }), booleanCls(backdropGrayscale, { trueCls: "backdrop-grayscale", falseCls: "backdrop-grayscale-0" }), booleanCls(backdropInvert, { trueCls: "backdrop-invert", falseCls: "backdrop-invert-0" }), booleanCls(backdropSepia, { trueCls: "sepia-grayscale", falseCls: "sepia-grayscale-0" }), {
    [`brightness-${brightness}`]: brightness,
    [`contrast-${contrast}`]: contrast,
    [`drop-shadow-${dropShadow}`]: dropShadow,
    [`hue-rotate-${hueRotate}`]: hueRotate,
    [`saturate-${saturate}`]: saturate,
    [`backdrop-brightness-${backdropBrightness}`]: backdropBrightness,
    [`backdrop-contrast-${backdropContrast}`]: backdropContrast,
    [`backdrop-hue-rotate-${backdropHueRotate}`]: backdropHueRotate,
    [`backdrop-opacity-${backdropOpacity}`]: backdropOpacity,
    [`backdrop-saturate-${backdropSaturate}`]: backdropSaturate
  });
};
const FlexboxClassNames = (props) => {
  const { flexBasis, flexDirection, flexWrap, flex, flexGrow, flexShrink } = props;
  return classNames({
    [`basis-${flexBasis}`]: flexBasis,
    [`flex-${flexDirection}`]: flexDirection,
    [`flex-${flexWrap}`]: flexWrap,
    [`flex-${flex}`]: flex,
    [`grow-${flexGrow}`]: flexGrow,
    [`shrink-${flexShrink}`]: flexShrink
  });
};
const GridClassNames = (props) => {
  const {
    gridCols,
    gridColAuto,
    gridColSpan,
    gridColStart,
    gridColEnd,
    gridRows,
    gridRowAuto,
    gridRowSpan,
    gridRowStart,
    gridRowEnd,
    gridAutoFlow,
    gridAutoCols,
    gridAutoRows
  } = props;
  return classNames({
    [`grid-cols-${gridCols}`]: gridCols,
    [`gridColAuto-${gridColAuto}`]: gridColAuto,
    [`col-span`]: gridColSpan,
    [`col-start-${gridColStart}`]: gridColStart,
    [`col-end-${gridColEnd}`]: gridColEnd,
    [`grid-rows-${gridRows}`]: gridRows,
    [`row-auto`]: gridRowAuto,
    [`row-span-${gridRowSpan}`]: gridRowSpan,
    [`row-start-${gridRowStart}`]: gridRowStart,
    [`row-end-${gridRowEnd}`]: gridRowEnd,
    [`grid-flow-${gridAutoFlow}`]: gridAutoFlow,
    [`auto-cols-${gridAutoCols}`]: gridAutoCols,
    [`auto-rows-${gridAutoRows}`]: gridAutoRows
  });
};
const FlexAndGridClassNames = (props) => {
  const {
    order,
    gap,
    gapX,
    gapY,
    justifyContent,
    justifyItems,
    justifySelf,
    alignContent,
    alignItems,
    alignSelf,
    placeContent,
    placeItems,
    placeSelf
  } = props;
  return classNames({
    [`order-${order}`]: order,
    [`gap-${gap}`]: gap,
    [`gapX-${gapX}`]: gapX,
    [`gapY-${gapY}`]: gapY,
    [`justify-${justifyContent}`]: justifyContent,
    [`justify-items-${justifyItems}`]: justifyItems,
    [`justify-self-${justifySelf}`]: justifySelf,
    [`content-${alignContent}`]: alignContent,
    [`items-${alignItems}`]: alignItems,
    [`self-${alignSelf}`]: alignSelf,
    [`place-content-${placeContent}`]: placeContent,
    [`place-items-${placeItems}`]: placeItems,
    [`place-self-${placeSelf}`]: placeSelf
  });
};
const InteractivityClassNames = (props) => {
  const {
    accentColor,
    appearance,
    cursor,
    caret,
    pointerEvents,
    resize,
    scrollBehavior,
    scrollMargin,
    scrollMX,
    scrollMY,
    scrollMT,
    scrollMR,
    scrollMB,
    scrollML,
    scrollPadding,
    scrollPX,
    scrollPY,
    scrollPT,
    scrollPR,
    scrollPB,
    scrollPL,
    scrollSnapAlign,
    scrollSnapStop,
    scrollSnapType,
    touchAction,
    userSelect,
    willChange
  } = props;
  return classNames(stringOrBooleanCls(resize, "resize"), {
    [`accent-color-${accentColor}`]: accentColor,
    [`appearance-${appearance}`]: appearance,
    [`cursor-${cursor}`]: cursor,
    [`caret-${caret}`]: caret,
    [`pointer-events-${pointerEvents}`]: pointerEvents,
    [`scroll-${scrollBehavior}`]: scrollBehavior,
    [`scroll-m-${scrollMargin}`]: scrollMargin,
    [`scroll-mx-${scrollMX}`]: scrollMX,
    [`scroll-my-${scrollMY}`]: scrollMY,
    [`scroll-mt-${scrollMT}`]: scrollMT,
    [`scroll-mr-${scrollMR}`]: scrollMR,
    [`scroll-mb-${scrollMB}`]: scrollMB,
    [`scroll-ml-${scrollML}`]: scrollML,
    [`scroll-padding-${scrollPadding}`]: scrollPadding,
    [`scroll-px-${scrollPX}`]: scrollPX,
    [`scroll-py-${scrollPY}`]: scrollPY,
    [`scroll-pt-${scrollPT}`]: scrollPT,
    [`scroll-pr-${scrollPR}`]: scrollPR,
    [`scroll-pb-${scrollPB}`]: scrollPB,
    [`scroll-pl-${scrollPL}`]: scrollPL,
    [`snap-${scrollSnapAlign}`]: scrollSnapAlign,
    [`snap-${scrollSnapStop}`]: scrollSnapStop,
    [`snap-${scrollSnapType}`]: scrollSnapType,
    [`touch-${touchAction}`]: touchAction,
    [`select-${userSelect}`]: userSelect,
    [`will-change-${willChange}`]: willChange
  });
};
const LayoutClassNames = (props) => {
  const {
    aspect,
    container,
    columns,
    breakAfter,
    breakBefore,
    breakInside,
    boxDecorationBreak,
    boxSizing,
    display,
    float,
    clear,
    isolate,
    objectFit,
    objectPosition,
    overflow,
    overflowX,
    overflowY,
    overscrollBehavior,
    position,
    inset,
    insetX,
    insetY,
    top,
    right,
    bottom,
    left,
    visible,
    zIndex
  } = props;
  return classNames({
    [`aspect-${aspect}`]: aspect,
    container,
    [`columns-${columns}`]: columns,
    [`break-after-${breakAfter}`]: breakAfter,
    [`break-before-${breakBefore}`]: breakBefore,
    [`break-inside-${breakInside}`]: breakInside,
    [`box-decoration-break-${boxDecorationBreak}`]: boxDecorationBreak,
    [`box-${boxSizing}`]: boxSizing,
    [`${display}`]: display,
    [`float-${float}`]: float,
    [`clear-${clear}`]: clear,
    [`isolate-${isolate}`]: isolate && typeof isolate !== "boolean",
    isolate: isolate && typeof isolate === "boolean",
    [`object-${objectFit}`]: objectFit,
    [`object-${objectPosition}`]: objectPosition,
    [`overflow-${overflow}`]: overflow,
    [`overflow-x-${overflow}`]: overflowX,
    [`overflow-y-${overflow}`]: overflowY,
    [`overscroll-${overscrollBehavior}`]: overscrollBehavior,
    position,
    [`inset-${inset}`]: inset,
    [`insetX-${insetX}`]: insetX,
    [`insetY-${insetY}`]: insetY,
    [`top-${top}`]: top,
    [`right-${right}`]: right,
    [`bottom-${bottom}`]: bottom,
    [`left-${left}`]: left,
    [`visible`]: visible,
    [`invisible`]: visible === false,
    [`z-${zIndex}`]: zIndex
  });
};
const SizingClassNames = (props) => {
  const { w, minW, maxW, h, minH, maxH } = props;
  return classNames({
    [`w-${w}`]: w,
    [`minW-${minW}`]: minW,
    [`maxW-${maxW}`]: maxW,
    [`h-${h}`]: h,
    [`minH-${minH}`]: minH,
    [`maxH-${maxH}`]: maxH
  });
};
const SpacingClassNames = (props) => {
  const { p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml, spaceX, spaceY } = props;
  return classNames({
    [`p-${p}`]: p,
    [`px-${px}`]: px,
    [`py-${py}`]: py,
    [`pt-${pt}`]: pt,
    [`pr-${pr}`]: pr,
    [`pb-${pb}`]: pb,
    [`pl-${pl}`]: pl,
    [`m-${m}`]: m,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
    [`mt-${mt}`]: mt,
    [`mr-${mr}`]: mr,
    [`mb-${mb}`]: mb,
    [`ml-${ml}`]: ml,
    [`spaceX-${spaceX}`]: spaceX,
    [`spaceY-${spaceY}`]: spaceY
  });
};
const SVGClassNames = (props) => {
  const { fill, stroke, strokeWidth } = props;
  return classNames({
    [`fill-${fill}`]: fill,
    [`stroke-${stroke}`]: stroke,
    [`stroke-${strokeWidth}`]: strokeWidth
  });
};
const TableClassNames = (props) => {
  const { borderCollapse, tableLayout } = props;
  return classNames({
    [`border-${borderCollapse}`]: borderCollapse,
    [`table-${tableLayout}`]: tableLayout
  });
};
const TransformsClassNames = (props) => {
  const { scale, scaleX, scaleY, rotate, translateX, translateY, skewX, skewY, transformOrigin } = props;
  return classNames({
    [`scale-${scale}`]: scale,
    [`scale-x-${scale}`]: scaleX,
    [`scale-y-${scale}`]: scaleY,
    [`rotate-${rotate}`]: rotate,
    [`translate-x-${translateX}`]: translateX,
    [`translate-y-${translateY}`]: translateY,
    [`skew-x-${skewX}`]: skewX,
    [`skew-y-${skewY}`]: skewY,
    [`origin-${transformOrigin}`]: transformOrigin
  });
};
const TransitionsAndAnimationClassNames = (props) => {
  const { transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, animation } = props;
  return classNames(stringOrBooleanCls(transitionProperty, "transition"), {
    [`duration-${transitionDuration}`]: transitionDuration,
    transitionTimingFunction,
    [`delay-${transitionDelay}`]: transitionDelay,
    [`animation-${animation}`]: animation
  });
};
const TypographyClassNames = (props) => {
  const {
    fontFamily,
    fontSize,
    FontSmoothing,
    fontItalic,
    fontWeight,
    fontVariant,
    tracking,
    letterSpacing,
    leading,
    lineHeight,
    listType,
    listPos,
    align,
    color,
    decoration,
    decorationColor,
    decorationStyle,
    decorationThickness,
    underlineOffset,
    textTransform,
    textOverflow,
    textIndent,
    verticalAlign,
    whiteSpace,
    wordBreak
  } = props;
  return classNames({
    [`font-${fontFamily}`]: fontFamily,
    [`text-${fontSize}`]: fontSize,
    [`smoothing-${FontSmoothing}`]: FontSmoothing,
    italic: fontItalic,
    "not-italic": fontItalic === false,
    [`font-${fontWeight}`]: fontWeight,
    fontVariant,
    [`tracking-${tracking}`]: tracking,
    [`tracking-${letterSpacing}`]: letterSpacing,
    [`leading-${leading}`]: leading,
    [`leading-${lineHeight}`]: lineHeight,
    [`list-${listType}`]: listType,
    [`list-${listPos}`]: listPos,
    [`text-${align}`]: align,
    [`text-${color}`]: color,
    decoration,
    [`decoration-${decorationColor}`]: decorationColor,
    [`decoration-${decorationStyle}`]: decorationStyle,
    [`decoration-${decorationThickness}`]: decorationThickness,
    [`underline-offset-${underlineOffset}`]: underlineOffset,
    textTransform,
    [`text-${textOverflow}`]: textOverflow,
    [`indent-${textIndent}`]: textIndent,
    [`align-${verticalAlign}`]: verticalAlign,
    [`space-${whiteSpace}`]: whiteSpace,
    [`break-${wordBreak}`]: wordBreak
  });
};
export { AccessibilityClassNames, BackgroundsClassNames, BordersClassNames, EffectsClassNames, FiltersClassNames, FlexAndGridClassNames, FlexboxClassNames, GridClassNames, InteractivityClassNames, LayoutClassNames, SVGClassNames, SizingClassNames, SpacingClassNames, TableClassNames, TransformsClassNames, TransitionsAndAnimationClassNames, TypographyClassNames, booleanCls, colorAmber, colorBlack, colorBlue, colorCommon, colorCyan, colorEmerald, colorFuchsia, colorGray, colorIndigo, colorLime, colorNeutral, colorOrange, colorPink, colorPurple, colorRed, colorRose, colorSky, colorSlate, colorStone, colorTeal, colorViolet, colorWhite, colorYellow, colorZinc, colors, stringOrBooleanCls };
//# sourceMappingURL=index.es.js.map
