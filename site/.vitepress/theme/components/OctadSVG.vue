<script lang="ts" setup>
// props
defineProps({
  title: {
    type: String,
    default: "Example Octad",
  },
  s1: {
    type: Object,
    required: false,
    default(rawProps) { return { value: "s1", desc: "lorem ipsum"  } },
  },
  s2: {
    type: Object,
    default(rawProps) { return { value: "s2", desc: "lorem ipsum"  } },
  },
  s3: {
    type: Object,
    default(rawProps) { return { value: "s3", desc: "lorem ipsum"  } },
  },
  s4: {
    type: Object,
    default(rawProps) { return { value: "s4", desc: "lorem ipsum"  } },
  },
  f1: {
    type: Object,
    default(rawProps) { return { value: "f1", desc: "lorem ipsum"  } },
  },
  f2: {
    type: Object,
    default(rawProps) { return { value: "f2", desc: "lorem ipsum"  } },
  },
  f3: {
    type: Object,
    default(rawProps) { return { value: "f3", desc: "lorem ipsum"  } },
  },
  f4: {
    type: Object,
    default(rawProps) { return {value: "f4", desc: "lorem ipsum" } }
  },
})

</script>

<template>
  <div>
    <svg ref="el" width="2222" height="1818" viewBox="0 0 2222 1818" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="The Octad">
        <circle id="Ellipse 16" cx="1211.5" cy="879.5" r="879.5" fill="url(#paint0_radial_347_2)" />
        <g id="Octad">
          <g id="F-tetrad">
            <rect id="F-rectangle" x="1148.19" y="453.66" width="722" height="722" transform="rotate(45 1148.19 453.66)"
              fill="#52C4F4" fill-opacity="0.13" stroke="#52C4F4" stroke-width="8" />
            <path id="F-process" d="M644.189 964.191H1652.69M1148.19 457.191V1470.69" stroke="#52C4F4" stroke-width="8" />
          </g>
          <g id="S-Tetrad">
            <path id="S-process" d="M791.616 1320.38L1504.73 607.266M789.495 605.498L1506.15 1322.15" stroke="#13C16D"
              stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
            <g id="S-rectangle" style="mix-blend-mode:difference">
              <rect x="787" y="603" width="722" height="722" fill="#14653E" fill-opacity="0.13" />
              <rect x="787" y="603" width="722" height="722" stroke="#13C16D" stroke-width="8" />
            </g>
          </g>
          <g id="Edges" style="mix-blend-mode:overlay">
            <path id="Vector 4" d="M1653 964.003L793 607.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 6" d="M1148 1471L793 607.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 8" d="M1148.52 457.003L1503.52 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 7" d="M1149.26 1471L1504.26 607.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 9" d="M1147.26 457.003L792.26 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 5" d="M1653 964.003L793 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 2" d="M644 964.003L793 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 10" d="M793 1321L1148 1471" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 15" d="M1148 459.003L793 609.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 16" d="M1149 459.003L1504 609.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 11" d="M1148 1471L1504 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 12" d="M1504 1321L1653 964.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 13" d="M1653 965.003L1504 608.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 3" d="M644 964.003L1504 607.003" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 5_2" d="M644 964.003L1504 1321" stroke="#F1F1F1" stroke-width="2" />
            <path id="Vector 14" d="M644 966.003L793 609.003" stroke="#F1F1F1" stroke-width="2" />
          </g>
        </g>
        <g id="Areana">
          <mask id="path-22-inside-1_347_2" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M798 818.682L1003.68 613L1293.68 613L1499 818.321V1109.05L1294.05 1314H1003.32L798 1108.68L798 818.682Z" />
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M798 818.682L1003.68 613L1293.68 613L1499 818.321V1109.05L1294.05 1314H1003.32L798 1108.68L798 818.682Z"
            fill="#56B8B2" fill-opacity="0.13" />
          <path
            d="M798 818.682L793.05 813.732L791 815.782L791 818.682L798 818.682ZM1003.68 613L1003.68 606L1000.78 606L998.732 608.05L1003.68 613ZM1293.68 613L1298.63 608.05L1296.58 606L1293.68 606L1293.68 613ZM1499 818.321H1506V815.421L1503.95 813.371L1499 818.321ZM1499 1109.05L1503.95 1114L1506 1111.95V1109.05H1499ZM1294.05 1314V1321H1296.95L1299 1318.95L1294.05 1314ZM1003.32 1314L998.366 1318.95L1000.42 1321H1003.32V1314ZM798 1108.68L791 1108.68L791 1111.58L793.05 1113.63L798 1108.68ZM802.95 823.632L1008.63 617.95L998.732 608.05L793.05 813.732L802.95 823.632ZM1003.68 620L1293.68 620L1293.68 606L1003.68 606L1003.68 620ZM1288.73 617.95L1494.05 823.271L1503.95 813.371L1298.63 608.05L1288.73 617.95ZM1492 818.321V1109.05H1506V818.321H1492ZM1494.05 1104.1L1289.1 1309.05L1299 1318.95L1503.95 1114L1494.05 1104.1ZM1294.05 1307H1003.32V1321H1294.05V1307ZM1008.27 1309.05L802.95 1103.73L793.05 1113.63L998.366 1318.95L1008.27 1309.05ZM805 1108.68L805 818.682L791 818.682L791 1108.68L805 1108.68Z"
            fill="#C0EDEA" mask="url(#path-22-inside-1_347_2)" />
        </g>
        <g id="S-value">
          <g id="S4-value">
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em" text-anchor="end">
              <tspan x="540.449219" y="823.773"> {{ s4.value }} </tspan>
            </text>
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em" text-anchor="end">
              <tspan x="540.449219" y="864.773">{{ s4.desc }}</tspan>
            </text>
          </g>
          <g id="S3-value">
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em" text-anchor="middle">
              <tspan x="1137" y="1747.77">{{ s3.desc }} </tspan>
            </text>
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em" text-anchor="middle">
              <tspan x="1137" y="1705.77"> {{ s3.value }} </tspan>
            </text>
          </g>
          <g id="S2-value">
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em">
              <tspan x="1763" y="818.773">{{ s2.value }} </tspan>
            </text>
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em">
              <tspan x="1763" y="857.773"> {{ s2.desc }}</tspan>
            </text>
          </g>
          <g id="S1-value">
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em" text-anchor="middle">
              <tspan x="1137" y="167.773">{{ s1.value }}</tspan>
            </text>
            <text fill="#52C4F4" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em" text-anchor="middle">
              <tspan x="1137" y="206.773">{{ s1.desc }}</tspan>
            </text>
          </g>
        </g>
        <g id="F-value">
          <g id="F4-value">
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em">
              <tspan x="750" y="409.773" text-anchor="end">{{ f4.value }}</tspan>
            </text>
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em">
              <tspan x="750" y="448.773" text-anchor="end"> {{ f4.desc }} </tspan>
            </text>
          </g>
          <g id="F3-value">
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em" text-anchor="end">
              <tspan x="750" y="1505.77">{{ f3.value }}</tspan>
            </text>
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em" text-anchor="end">
              <tspan x="750" y="1544.77"> {{ f3.desc }}</tspan>
            </text>
          </g>
          <g id="F2-value">
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em">
              <tspan x="1546" y="1497.77">{{ f2.value }}</tspan>
            </text>
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em">
              <tspan x="1546" y="1539.77"> {{ f2.desc }}</tspan>
            </text>
          </g>
          <g id="F1-value">
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="42"
              font-weight="bold" letter-spacing="0em">
              <tspan x="1546" y="409.773">{{ f1.value }}</tspan>
            </text>
            <text fill="#13C16D" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="24"
              font-weight="300" letter-spacing="0em">
              <tspan x="1546" y="448.773">{{ f1.value }}</tspan>
            </text>

          </g>
        </g>
        <g id="F-desc">
          <g id="F4-desc">
            <text id="Inherent Values" fill="#60DA9F" xml:space="preserve" style="white-space: pre" font-family="Inter"
              font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="597.623" y="502.909">INHERENT&#10;</tspan>
              <tspan x="630.084" y="538.909">VALUES</tspan>
            </text>
          </g>
          <g id="F3-desc">
            <text id="Necessary Resources" fill="#60DA9F" xml:space="preserve" style="white-space: pre"
              font-family="Inter" font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="565.865" y="1388.91">NECESSARY&#10;</tspan>
              <tspan x="565.66" y="1424.91">RESOURCES</tspan>
            </text>
          </g>
          <g id="F2-desc">
            <text id="Critical functions" fill="#60DA9F" xml:space="preserve" style="white-space: pre" font-family="Inter"
              font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="1548" y="1388.91">CRITICAL &#10;</tspan>
              <tspan x="1548" y="1424.91">FUNCTIONS</tspan>
            </text>
          </g>
          <g id="F1-desc">
            <text id="Organization modes" fill="#60DA9F" xml:space="preserve" style="white-space: pre" font-family="Inter"
              font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="1548" y="509.909">ORGANIZATION&#10;</tspan>
              <tspan x="1548" y="545.909">MODES</tspan>
            </text>
          </g>
        </g>
        <g id="S-desc">
          <g id="S4-desc">
            <text id="Integrative totality" fill="#94D2ED" xml:space="preserve" style="white-space: pre"
              font-family="Inter" font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="332.58" y="952.909">INTEGRATIVE&#10;</tspan>
              <tspan x="384.465" y="988.909">TOTALITY</tspan>
            </text>
          </g>
          <g id="S3-desc">
            <text id="Supportive Platform" fill="#94D2ED" xml:space="preserve" style="white-space: pre"
              font-family="Inter" font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="966" y="1633.91">SUPPORTIVE PLATFORM</tspan>
            </text>
          </g>
          <g id="S2-desc">
            <text id="Autonomus unit" fill="#94D2ED" xml:space="preserve" style="white-space: pre" font-family="Inter"
              font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="1763" y="952.909">AUTONOMUS &#10;</tspan>
              <tspan x="1763" y="988.909">UNIT</tspan>
            </text>
          </g>
          <g id="S1-desc">
            <text id="Intrinsic nature" fill="#94D2ED" xml:space="preserve" style="white-space: pre" font-family="Inter"
              font-size="30" font-weight="bold" letter-spacing="0em">
              <tspan x="1008" y="310.909">INTRINSIC NATURE </tspan>
            </text>
          </g>
        </g>
      </g>
      <defs>
        <radialGradient id="paint0_radial_347_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1211.5 879.5) rotate(90) scale(879.5)">
          <stop stop-color="#10252E" stop-opacity="0.12" />
          <stop offset="0.541667" stop-color="#0E252F" stop-opacity="0.6" />
          <stop offset="0.90625" stop-color="#0B1F27" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<style scoped>
svg {
  max-width: 90vw;
  max-height: 100vh
}

text {
  text-transform: uppercase;
}
</style>