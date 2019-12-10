import { setBaseStyles } from '../packages/synth-ui/src'
import { withSynth } from '../packages/synth-react/src'
import { createGlobalStyle } from 'styled-components'

import {
  borderRadius,
  color,
  fontSize,
} from '../packages/synth-styled-components/src'

const Styles = createGlobalStyle`
  body, html {
    ${setBaseStyles()}
    background-color: transparent;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  .sbdocs {
    && {
      code {
        ${borderRadius()}
        background-color: rgba(255, 255, 255, 0.055);
        border: 1px solid rgba(255,255,255,.035);
        color: rgba(255, 255, 255, 0.75);
        font-family: "Operator Mono", "Fira Code Retina", "Fira Code", FiraCode-Retina, "Andale Mono", "Lucida Console", Consolas, Monaco, monospace;
        font-size: 85%;
        padding: 1px 2px 2px;
      }

      .simplebar-content code {
        background-color: transparent;
        border-color: transparent;
      }

      .sbdocs-content {
        max-width: 1024px;
      }

      .sbdocs-h2 {
        color: #fff;
        border: 0 none;
        margin: 35px 0;
        padding: 0;
      }

      .sbdocs-p {
        ${fontSize('text')}        

        a {
          ${color('@BeatGig')}
          ${fontSize('text')}
          text-decoration: underline;
        }
      }

      .sbdocs-table {
        width: 100%;

        thead tr, thead th, tbody tr, tbody td {
          border: 0 none;
        }

        thead tr {
          border-bottom: 1px solid ${({ synth }) => synth.getValue('@Shark')};
        }

        th {
          ${color('@Oslo')}
        }
        
        tr {
          background-color: transparent;

          &:nth-child(even) {
            background-color: rgba(0, 0, 0, 0.15);
          }

          td {
            &:first-child {
              border-top-left-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
              border-bottom-left-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
            }

            &:last-child {
              border-top-right-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
              border-bottom-right-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
            }        
          }
        }

        th, td {
          border-left: 0 none;
          border-right: 0 none;
          padding: 10px;
        }
      }

      [data-simplebar="init"] + div {
        background-color: transparent;
      }
    }
  }
`

export default withSynth(Styles)