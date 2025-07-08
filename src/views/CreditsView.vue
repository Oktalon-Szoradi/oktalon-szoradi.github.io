<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AbbreviationMobile from '@/components/AbbreviationMobile.vue'
import GlassCard from '@/components/GlassCard.vue'
import AccordionSingle from '@/components/AccordionSingle.vue'

const FONT_LOCATIONS_OXYGEN = [
  '/fonts/Oxygen/OFL.txt',
  '/fonts/Oxygen/Oxygen-Regular.ttf',
  '/fonts/Oxygen/Oxygen-Light.ttf',
  '/fonts/Oxygen/Oxygen-Bold.ttf'
]
const FONT_LOCATIONS_FIRACODE = [
  '/fonts/FiraCode/ttf/FiraCode-Retina.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Regular.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Light.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Medium.ttf',
  '/fonts/FiraCode/ttf/FiraCode-SemiBold.ttf',
  '/fonts/FiraCode/ttf/FiraCode-Bold.ttf',
  '/fonts/FiraCode/variable_ttf/FiraCode-VF.ttf',
  '/fonts/FiraCode/woff/FiraCode-VF.woff',
  '/fonts/FiraCode/woff/FiraCode-Regular.woff',
  '/fonts/FiraCode/woff/FiraCode-Light.woff',
  '/fonts/FiraCode/woff/FiraCode-Medium.woff',
  '/fonts/FiraCode/woff/FiraCode-SemiBold.woff',
  '/fonts/FiraCode/woff/FiraCode-Bold.woff',
  '/fonts/FiraCode/woff2/FiraCode-VF.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Regular.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Light.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Medium.woff2',
  '/fonts/FiraCode/woff2/FiraCode-SemiBold.woff2',
  '/fonts/FiraCode/woff2/FiraCode-Bold.woff2',
  '/fonts/FiraCode/fira_code.css',
  '/fonts/FiraCode/README.txt',
  '/fonts/FiraCode/specimen.html'
]
const FONT_LOCATIONS_SOURCESANS3 = [
  '/fonts/SourceSans3/OFL.txt',
  '/fonts/SourceSans3/SourceSans3-VariableFont_wght.ttf '
]

const route = useRoute()

function scrollToTarget(timeout: number = 0) {
  const scrollToId = route.query.scrollTo as string | undefined
  if (scrollToId) {
    setTimeout(() => {
      const element = document.getElementById(scrollToId)
      if (element) {
        // Optional: adjust for sticky navbar
        const navbar = document.querySelector('header') as HTMLElement | null
        const navbarHeight = navbar?.offsetHeight ?? 0
        const y =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
        // window.scrollTo({ top: y })
      }
    }, timeout)
  }
}

onMounted(() => {
  scrollToTarget(100)
})

watch(
  () => route.fullPath,
  () => {
    scrollToTarget()
  }
)
</script>

<template>
  <div class="container">
    <GlassCard class="text-center author-box">
      <span class="symbol">🄯</span> Oktalon Szórádi 2025
      <br />
      Copyleft (GPLv3) except for my logo. Please do not use my logo without
      permission.
      <br />
      Other media are
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="license noopener noreferrer"
        >CC BY-NC-SA 4.0<img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          alt="Creative Commons" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          alt="Attribution required" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
          alt="Commercial use forbidden" /><img
          style="
            margin-left: 3px;
            height: 22px !important;
            vertical-align: text-bottom;
          "
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
          alt=" ShareAlike (copyleft)"
      /></a>
    </GlassCard>
    <div class="flex area-with-side-nav">
      <aside class="sticky flex">
        <div class="main-aside">
          <GlassCard class="aside-card navigation">
            <h1>Navigation</h1>
            <a
              :href="`/#${$route.path}?scrollTo=Fonts`"
              class="no-top-margin"
              @click="scrollToTarget()"
              ><b>Fonts</b></a
            >
            <ul class="nav-list">
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-Oxygen`"
                  @click="scrollToTarget()"
                >
                  Oxygen
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-SourceSans3`"
                  @click="scrollToTarget()"
                >
                  Source Sans 3
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Fonts-FiraCode`"
                  @click="scrollToTarget()"
                >
                  Fira Code
                </a>
              </li>
            </ul>
            <a
              :href="`/#${$route.path}?scrollTo=ExternalLinkIcon`"
              @click="scrollToTarget()"
              ><b>External Link Icon</b></a
            >
            <a
              :href="`/#${$route.path}?scrollTo=OxygenIcons`"
              @click="scrollToTarget()"
              ><b>Oxygen Icons</b></a
            >
            <a
              :href="`/#${$route.path}?scrollTo=Frameworks`"
              @click="scrollToTarget()"
              ><b>Technologies / Frameworks</b></a
            >
            <ul class="nav-list">
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=AudioVisualizations`"
                  @click="scrollToTarget()"
                >
                  Audio Visualizations
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=ArkUI`"
                  @click="scrollToTarget()"
                >
                  ArkUI
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Pinia`"
                  @click="scrollToTarget()"
                >
                  Pinia
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=Vue`"
                  @click="scrollToTarget()"
                >
                  Vue
                </a>
              </li>
              <li>
                <a
                  :href="`/#${$route.path}?scrollTo=VueRouter`"
                  @click="scrollToTarget()"
                >
                  Vue Router
                </a>
              </li>
            </ul>
          </GlassCard>
        </div>
        <div class="separator"></div>
      </aside>
      <main>
        <GlassCard id="Fonts" title="Fonts">
          <h1 id="Fonts-Oxygen" class="no-top-margin">Oxygen</h1>
          <p>The main font used throughout this website</p>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/specimen/Oxygen"
                target="_blank"
              >
                https://fonts.google.com/specimen/Oxygen
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_OXYGEN" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
          <h1 id="Fonts-SourceSans3">Source Sans 3</h1>
          <p>Used for some symbols, like</p>
          <table>
            <tbody>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
              <tr>
                <td><span class="symbol">🄯</span></td>
                <td><code>COPYLEFT SYMBOL</code></td>
                <td><code>U+1F12F</code></td>
              </tr>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
              <tr>
                <td><span class="symbol">♂</span></td>
                <td>
                  <code>MALE SIGN {Mars; alchemical symbol for iron}</code>
                </td>
                <td>
                  <code>U+2642</code>
                </td>
              </tr>
              <tr class="divider-row">
                <td colspan="100%"><hr /></td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/specimen/Source+Sans+3"
                target="_blank"
              >
                https://fonts.google.com/specimen/Source+Sans+3
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_SOURCESANS3" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
          <h1 id="Fonts-FiraCode">Fira Code</h1>
          <p>
            Monospace font used in some places, like for clipboard elements in
            Connections or date/time in Home
          </p>
          <ul>
            <li>
              <a href="https://github.com/tonsky/FiraCode" target="_blank">
                https://github.com/tonsky/FiraCode
              </a>
            </li>
            <li>
              License from the GitHub repository:
              <a href="/fonts/FiraCode/LICENSE.txt">
                /fonts/FiraCode/LICENSE.txt
              </a>
            </li>
            <li v-for="(str, i) of FONT_LOCATIONS_FIRACODE" :key="i">
              <a :href="str"> {{ str }} </a>
            </li>
          </ul>
        </GlassCard>
        <GlassCard id="ExternalLinkIcon" title="External Link Icon" noCenter>
          from Wikipedia<br />
          To indicate links with a target of "_blank" (open in new tab).
          Modified to have the color
          <code class="color-code-98a1e5">#98A1E5</code>.<br />
          <a
            href="https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg"
            target="_blank"
          >
            https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/link-external-small-ltr-progressive.svg
          </a>
        </GlassCard>
        <GlassCard id="OxygenIcons" title="Oxygen Icons" noCenter>
          Some of the icons I use are from here:
          <p>
            <a href="https://github.com/KDE/oxygen-icons" target="_blank">
              https://github.com/KDE/oxygen-icons
            </a>
          </p>
          <hr />
          <AccordionSingle class="accordion" title="License (LGPL)">
            <hr />
            <div class="left-right-padding text-justify">
              <h3>The Oxygen Icon Theme</h3>
              <p>
                Copyright (C) 2007 Nuno Pinheiro
                &lt;nuno@oxygen-icons.org&gt;<br />
                Copyright (C) 2007 David Vignoni &lt;david@icon-king.com&gt;<br />
                Copyright (C) 2007 David Miller
                &lt;miller@oxygen-icons.org&gt;<br />
                Copyright (C) 2007 Johann Ollivier Lapeyre
                &lt;johann@oxygen-icons.org&gt;<br />
                Copyright (C) 2007 Kenneth Wimer &lt;kwwii@bootsplash.org&gt;<br />
                Copyright (C) 2007 Riccardo Iaconelli
                &lt;riccardo@oxygen-icons.org&gt;
              </p>
              <p>and others</p>
              <p>
                This library is free software; you can redistribute it and/or
                modify it under the terms of the GNU Lesser General Public
                License as published by the Free Software Foundation; either
                version 3 of the License, or (at your option) any later version.
              </p>
              <p>
                This library is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
                Lesser General Public License for more details.
              </p>
              <p>
                You should have received a copy of the GNU Lesser General Public
                License along with this library. If not, see &lt;<a
                  href="http://www.gnu.org/licenses/"
                  target="_blank"
                  >http://www.gnu.org/licenses/</a
                >&gt;.
              </p>
              <h4>Clarification:</h4>
              <p>
                The GNU Lesser General Public License or LGPL is written for
                software libraries in the first place. We expressly want the
                LGPL to be valid for this artwork library too.
              </p>
              <p>
                KDE Oxygen theme icons is a special kind of software library, it
                is an artwork library, it's elements can be used in a Graphical
                User Interface, or GUI.
              </p>
              <p class="no-bottom-margin">
                Source code, for this library means:
              </p>
              <ul class="hyphen-list">
                <li>where they exist, SVG;</li>
                <li>
                  otherwise, if applicable, the multi-layered formats xcf or
                  psd, or otherwise png.
                </li>
              </ul>
              <p>
                The LGPL in some sections obliges you to make the files carry
                notices. With images this is in some cases impossible or hardly
                useful.
              </p>
              <p>
                With this library a notice is placed at a prominent place in the
                directory containing the elements. You may follow this practice.
              </p>
              <p>
                The exception in section 5 of the GNU Lesser General Public
                License covers the use of elements of this art library in a GUI.
              </p>
              <p>kde-artists [at] kde.org</p>
            </div>
          </AccordionSingle>
          <hr class="no-bottom-margin" />
        </GlassCard>
        <GlassCard id="Frameworks" title="Tech&shy;nologies / Frame&shy;works">
          <!-- #region AudioVisualizations -->
          <h1 id="AudioVisualizations" class="no-top-margin">
            Audio Vis&shy;u&shy;al&shy;iza&shy;tions
          </h1>
          <p>
            When there's audio on a page (e.g. 4th grade HTL Soundtrap page), I
            like to use this.
          </p>
          <ul>
            <li>by Stas Kobzar:</li>
            <li>
              <a
                href="https://www.npmjs.com/package/vue-audio-visual"
                target="_blank"
              >
                https://www.npmjs.com/package/vue-audio-visual
              </a>
            </li>
            <li>
              <a
                href="https://github.com/staskobzar/vue-audio-visual"
                target="_blank"
              >
                https://github.com/staskobzar/vue-audio-visual
              </a>
            </li>
          </ul>
          <hr />
          <AccordionSingle class="accordion" title="License (MIT)">
            <hr />
            <div class="left-right-padding text-justify">
              <p>The MIT License (MIT)</p>
              <p>Copyright (c) 2018-present, Stas Kobzar</p>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </AccordionSingle>
          <hr />
          <!-- #endregion -->
          <!-- #region ArkUI -->
          <h1 id="ArkUI">Ark UI</h1>
          <p>
            I'm using this for some components (e.g. Accordion, Clipboard,
            Popover)
          </p>
          <ul>
            <li>
              <a href="https://ark-ui.com/" target="_blank">
                https://ark-ui.com/
              </a>
            </li>
            <li>
              <a href="https://github.com/chakra-ui/ark" target="_blank">
                https://github.com/chakra-ui/ark
              </a>
            </li>
          </ul>
          <hr />
          <AccordionSingle class="accordion" title="License (MIT)">
            <hr />
            <div class="left-right-padding text-justify">
              <p>MIT License</p>
              <p>Copyright (c) 2024 Chakra UI</p>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </AccordionSingle>
          <hr />
          <!-- #endregion -->
          <!-- #region Pinia -->
          <h1 id="Pinia">Pinia</h1>
          <p>
            Not really used much here. One store is to check the GitHub repo
            branch <code>gh-pages</code> for the date of the last commit ("Site
            last updated on" in Home)
          </p>
          <ul>
            <li>
              <a href="https://pinia.vuejs.org/" target="_blank">
                https://pinia.vuejs.org/
              </a>
            </li>
            <li>
              <a href="https://github.com/vuejs/pinia" target="_blank">
                https://github.com/vuejs/pinia
              </a>
            </li>
          </ul>
          <hr />
          <AccordionSingle class="accordion" title="License (MIT)">
            <hr />
            <div class="left-right-padding text-justify">
              <p>The MIT License (MIT)</p>
              <p>Copyright (c) 2018-present, Stas Kobzar</p>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </AccordionSingle>
          <hr />
          <!-- #endregion -->
          <!-- #region Vue -->
          <h1 id="Vue">Vue.js</h1>
          <p>
            This is the JavaScript framework I learned at school/HTL and what
            this website is using now! I like it&emsp;:3
          </p>
          <ul>
            <li>
              <a href="https://vuejs.org/" target="_blank">
                https://vuejs.org/
              </a>
            </li>
            <li>
              <a href="https://github.com/vuejs/core" target="_blank">
                https://github.com/vuejs/core
              </a>
            </li>
          </ul>
          <hr />
          <AccordionSingle class="accordion" title="License (MIT)">
            <hr />
            <div class="left-right-padding text-justify">
              <p>The MIT License (MIT)</p>
              <p>
                Copyright (c) 2018-present, Yuxi (Evan) You and Vue contributors
              </p>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </AccordionSingle>
          <hr />
          <!-- #endregion -->
          <!-- #region VueRouter -->
          <h1 id="VueRouter">Vue Router</h1>
          <p>This is what I use for page navigation.</p>
          <p>
            Also, it would be nice to have clean paths, but because this is kind
            of a Single-Page-Application (just 1 index.html, then a whole bunch
            of JavaScript), I need to use "Hash Routing". So, there's a silly #
            in the path all the time. It's important too. Apparently Hash
            Routing is bad for
            <AbbreviationMobile title="Search Engine Optimization"
              >SEO</AbbreviationMobile
            >, but I don't care about that lol
          </p>
          <ul>
            <li>
              <a href="https://router.vuejs.org/" target="_blank">
                https://router.vuejs.org/
              </a>
            </li>
            <li>
              <a href="https://github.com/vuejs/router" target="_blank">
                https://github.com/vuejs/router
              </a>
            </li>
          </ul>
          <hr />
          <AccordionSingle class="accordion" title="License (MIT)">
            <hr />
            <div class="left-right-padding text-justify">
              <p>The MIT License (MIT)</p>
              <p>Copyright (c) 2019-present Eduardo San Martin Morote</p>
              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </AccordionSingle>
          <hr />
          <!-- #endregion -->
        </GlassCard>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-code-98a1e5 {
  color: #98a1e5;
  font-size: 1rem;
}

.accordion {
  :deep([data-part='item-trigger']) {
    padding: 0.5em 0.75em;
  }

  .left-right-padding {
    padding: 0 1.25em;
  }
}

.top-margin {
  margin-top: 2em;
}

.flex {
  gap: 1em;
}

.area-with-side-nav {
  aside {
    flex-basis: 33.333em;

    .main-aside {
      flex: 1;
    }
  }

  main {
    width: 100%;
  }
}

.sticky {
  position: sticky;
  top: calc(64px + 24px);
  align-self: start;
}

h1 {
  margin: 1em 0 0.5em;
  background: linear-gradient(
    to right,
    hsl(263deg 64% 28% / 25%),
    hsl(263deg 64% 28% / 5%)
  );
  color: hsl(0deg 0% 100% / 75%);

  &::after {
    display: block;
    margin-top: 0.1em;
    box-shadow: 0 0 2px hsl(0deg 0% 0% / 75%);
    background: linear-gradient(
      to right,
      hsl(0deg 0% 100% / 50%),
      hsl(0deg 0% 100% / 5%)
    );
    width: 100%;
    height: 1px;
    content: '';
  }
}

.navigation {
  display: flex;
  flex-direction: column;

  h1 {
    margin: -0.67em 0 0;
    background: none;
    text-align: center;
    text-shadow: none;
    color: hsl(0deg 0% 100% / 25%);
    font-size: 2.5em;
    font-weight: lighter;

    &::after {
      display: none;
    }
  }

  a {
    margin-top: 0.5em;
    text-decoration: none;
    text-decoration-color: hsl(0deg 0% 100% / 45%);
    color: hsl(0deg 0% 100% / 90%);

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-list {
    /* margin: 0 0 0.5em; */
    margin: 0;
    padding-left: 1em;
    list-style: none;

    li {
      margin: 0.25em 0;
    }
  }
}

.hyphen-list {
  margin: 0;
  padding-left: 1em;
  list-style-type: '⁃ ';
}

td {
  padding: 0 0.5em;
  vertical-align: top;
}

hr {
  opacity: 0.5;
  margin: 0;
}

.divider-row {
  hr {
    margin: 0 0 0.333em;
  }
}

.separator {
  margin-top: 2em;
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(0deg 0% 100% / 50%),
    hsl(0deg 0% 100% / 50%),
    transparent
  );
  width: 1px;
  white-space: nowrap;

  &::before,
  &::after {
    display: inline-block;
    position: relative;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      hsl(0deg 0% 0% / 25%),
      hsl(0deg 0% 0% / 25%),
      transparent
    );
    width: 1px;
    height: 100%;
    content: '';
  }

  &::before {
    left: -1px;
  }
}

@media (width <= 768px) {
  .flex {
    gap: 0;
  }

  .area-with-side-nav {
    flex-direction: column;

    aside {
      display: block;
      flex-basis: auto;
      width: 100%;

      a {
        margin-left: 0;
      }
    }
  }

  .sticky {
    position: static;
  }

  .separator {
    display: none;
  }
}
</style>
