<script setup lang="ts">
// import NavigationButtons from '@/components/NavigationButtons.vue'
import GlassCard from '@/components/GlassCard.vue'
import PushButton from '@/components/PushButton.vue'
import CopyToClipboard from '@/components/CopyToClipboard.vue'
import NavigationSideBySide from '@/components/NavigationSideBySide.vue'
import type { ScrollToObjects } from '@/assets/types'

const NAVIGATION: ScrollToObjects[] = [
  {
    name: 'GitHub Repository',
    id: 'ghRepoButton'
  },
  {
    name: 'My Preferences',
    id: 'MyPreferences',
    children: [
      {
        name: 'Language',
        id: 'Language'
      },
      {
        name: 'Numbers',
        id: 'Numbers'
      },
      {
        name: 'Date and Time',
        id: 'DateAndTime'
      },
      {
        name: 'Currency',
        id: 'Currency'
      },
      {
        name: 'Measurements',
        id: 'Measurements'
      },
      {
        name: 'Paper Size',
        id: 'PaperSize'
      },
      {
        name: 'Address',
        id: 'Address'
      },
      {
        name: 'Name Style',
        id: 'NameStyle'
      },
      {
        name: 'Phone Numbers',
        id: 'PhoneNumbers'
      },
      {
        name: 'Data and Storage Sizes',
        id: 'DataAndStorageSizes'
      }
    ]
  },
  {
    name: 'Extra Opinions',
    id: 'ExtraOpinions',
    children: [
      {
        name: 'Measurement and Numbers',
        id: 'MeasurementAndNumbers'
      },
      {
        name: 'Name Style',
        id: 'ExtraOpinions_NameStyle'
      },
      {
        name: 'Time',
        id: 'Time'
      }
    ]
  },
  {
    name: 'The Actual Guide',
    id: 'Instructions',
    children: [
      {
        name: '1. Get the files',
        id: 'instructions-1'
      },
      {
        name: '2. Install the locale',
        id: 'instructions-2'
      },
      {
        name: '3. Using the locale',
        id: 'instructions-3'
      },
      {
        name: '4. Reboot',
        id: 'instructions-4'
      }
    ]
  }
]
</script>
<template>
  <div class="container">
    <!-- <NavigationButtons :queryIndex="1" :queryParams="{ scrollTo: 'Misc' }" /> -->
    <NavigationSideBySide
      :scrollToHeadings="NAVIGATION"
      :navigationButtons_queryIndex="1"
      :navigationButtons_queryParams="{ scrollTo: 'Misc' }"
      :onlyOneLevel="false"
      width="personal"
    >
      <GlassCard title="EU English Linux Locale">
        <div class="text-center">
          <PushButton
            id="ghRepoButton"
            color="green"
            href="https://github.com/Talon125/eu-linux-locale"
          >
            GitHub Repository
          </PushButton>
        </div>
        <p>
          In Windows, you can freely customize your regional formatting
          regardless of which country you've chosen. Heck, you can make the time
          format be emojis. But on Linux, it seems you're bound to a specific
          locale.
        </p>
        <p>
          I wasn't satisfied by my options. Trying to find some locale for each
          formatting option that mostly matched what I wanted, but there would
          always be some compromise.
        </p>
        <p>
          So I thought "Hey, this is Linux! If you don't like something, then
          usually you can change it". I then decided to have a look at how
          locales work in Linux and make my own!
        </p>
        <p>
          The GitHub repository has general instructions and the actual files.
          Go over there to get the file(s). On this page, I'll go over…
        </p>
        <h2 id="MyPreferences">My Preferences</h2>
        <p>
          …then later instructions if you're using <code>nano</code> as your
          terminal text editor.
        </p>
        <h3 id="Language">Language</h3>
        <p>
          <code>en_US</code> should be used. It's kinda the "original" or
          "default" language when it comes to computers. Even if I also speak
          German, I don't like my e.g. OSes being in German. I'll just find
          translation and localization inaccuracies and be mildly infuriated by
          them.
        </p>
        <p>
          One example is Windows' User Account Control in German. They localized
          it as "Benutzerkontensteuerung". The Benutzerkonto part is mostly
          okay, it does indeed mean "user account", though to be strict, it's
          not gender-neutral, but that's kind of a whole separate thingy. The
          main issue here is "Steuerung". Yes, it does mean control, but control
          as in like a game controller, to control something. UAC doesn't really
          do that, it's not taking control of your user accounts, it's moreso
          just checking. The <code>exe</code> is called
          <code>consent.exe</code> after all. German has a word that sounds like
          "control" that would better fit here: "Kontrolle". This is like
          checking, like when ticket inspectors inspect your train ticket. So,
          "User Account Control" should be "Benutzerkontenkontrolle" instead of
          "Benutzerkontensteuerung" (if you focus on the "main" issue).
        </p>
        <p>
          Even in non-computer areas, I prefer the original language the media
          is in. Like Super Mario Galaxy. I had a look at it in German, and
          right before you begin the game, I find inconsistencies. In one place
          the button is labeled "O.K.!" and in another it's "Okay". Then when
          you start the game and are in the intro cutscene, Toads will tell you
          about star bits, which in German are… Sternenstaub? Or is it
          Sternenteile? Both terms are used in the game. Why?
        </p>
        <h3 id="Numbers">Numbers</h3>
        <p>
          In English, one thousand and a quarter (point two five) would
          typically be formatted as <code>1,000.25</code>. The
          thousands-separator (or more generally, the digit grouping symbol) is
          the comma and the decimal symbol or decimal point is, well, that. A
          point, or I'd rather call it a period or dot.
        </p>
        <p>
          But in German and many other languages? Could it be different symbols?
          No, instead it's exactly the <i>opposite</i> of what it is in English.
          So, instead you'd get <code>1.000,25</code>.
        </p>
        <p>
          At least digit grouping is mostly agreed on: 3 digits, aka thousands.
        </p>
        <p>
          I prefer the decimal symbol to remain the period. That's how it is in
          programming too (en_US bias). But I don't really like the
          thousands-separator being a comma. Instead, I prefer it to be an
          apostrophe. In fact, it seems like this is what Liechtenstein does. I
          think the apostrophe is less ambiguous because I don't use it often in
          numbers anyway. Besides, with digit grouping being 3 digits long, it
          shouldn't be that easily confused with prime/sexagesimal notation.
        </p>
        <p>&emsp; Example: <code>1'000.25</code></p>
        <p>
          Typographically, the apostrophe should be upright, not slanted or
          curved.
        </p>
        <p>
          Some just use a space as a thousands separator. I don't like a full
          normal space because this is already used for other things, like,
          well, separating words. It requires you to assume or have extra
          context that "yes this is one number, not multiple". Also, it would
          then count as multiple words in a word processing program. If you
          really want some form of whitespace, use some kind of thin space or
          hair space.
        </p>
        <p>
          But again, I'd rather a separator be clear rather than some
          whitespace. I prefer a symbol over whitespace.
        </p>
        <h3 id="DateAndTime">Date and Time</h3>
        <p>
          The date must adhere to ISO 8601 and the time should ideally be
          24-hour.
        </p>
        <p>&emsp; Example: <code>2026-02-21 16:01</code></p>
        <p>
          <code>YYYY-MM-DD</code> makes most sense because it's sorted from
          most-significant to least-significant, as we already do with the time
          (everyone agrees on HH:mm:ss, nobody orders it ss:mm:HH) and even
          numbers. 1'000 is larger than 0001. It also plays nicely with
          lexographic order.
        </p>
        <p>
          <code>DD.MM.YYYY</code> may still be acceptable because it's still
          ordered, but I would consider this backwards.
        </p>
        <p>
          <code>MM/DD/YYYY</code> is not acceptable because it is not ordered.
        </p>
        <p>Years must never be 2-digit.</p>
        <p>Leading <code>0</code>s must always be present.</p>
        <p>
          The time should be 24-hour (not 12-hour) since it's also
          frictionlessly compatible with lexographic order.
        </p>
        <p>
          The separator for the time should be a colon (<code>:</code>). It
          should only be ommitted where a colon is not allowed or discouraged,
          such as in file names. Periods are unacceptable. It's the time, not
          just some number!
        </p>
        <h3 id="Currency">Currency</h3>
        <p>
          I live in the EU, so I work with the Euro (€). If you're using the
          symbol, it should come before the amount, with no space in between
          (or, if you really want some whitespace, use a thin or hair space).
        </p>
        <p>&emsp; Example: €10.99</p>
        <p>
          If you need to represent a negative value, which I've rarely had to
          do, I suppose I'd prefer the following:
        </p>
        <p>&emsp; Example: €-456.12</p>
        <p>
          If you're going to use the currency code (ISO 4217), then it should
          come afterwards with a space in between.
        </p>
        <p>&emsp; Example: 10.99 EUR</p>
        <p>And for a negative value:</p>
        <p>&emsp; Example: -456.12 EUR</p>
        <p>By the way, there exists a symbol for unspecified currency:</p>
        <p>&emsp; ¤ &emsp; (<code>U+00A4 : CURRENCY SIGN</code>)</p>
        <h3 id="Measurements">Measurements</h3>
        <p>Metric. No imperial.</p>
        <h3 id="PaperSize">Paper Size</h3>
        <p>
          A4 (international standard paper sizes, ISO 216). Since I don't live
          in the US, no "Letter" paper.
        </p>
        <h3 id="Address">Address</h3>
        <p>
          I don't really have strong opinions for address formatting. Just
          adhere to local standards.
        </p>
        <h3 id="NameStyle">Name Style</h3>
        <p>
          I don't really have strong opinions here either. Some areas, like
          schools or universities, prefer your last name first.
        </p>
        <p>
          I noticed here in Austria that sometimes the last name is capitalized
          to make it clear that's the last name. So I guess in such a setting
          where last names take priority, you could write:
        </p>
        <p>&emsp; LASTNAME, FirstName MiddleName(s)</p>
        <p>
          Otherwise, the first name, as you may assume based on its very name,
          should come first:
        </p>
        <p>&emsp; FirstName (MiddleName(s)) LastName</p>
        <p>I don't yet have [strong] opinions on profession or titles.</p>
        <h3 id="PhoneNumbers">Phone Numbers</h3>
        <p>
          I prefer always having the country code. Only sometimes will I replace
          it with a 0 (obviously only in specific local settings).
        </p>
        <p>So that means, for example:</p>
        <p>&emsp; +43 XXX XXXXXXX</p>
        <h3 id="DataAndStorageSizes">Data and Storage Sizes</h3>
        <p>
          IEC (International Electrotechnical Commission). <br />
          That means Kibibytes (KiB), Mebibytes (MiB), Gibibytes (GiB), and so
          on. This is also binary, as it should be (computers count in
          binary!!), which means 1 KiB = 1'024 B (that's 2^10 bytes).
        </p>
        <p>
          Windows still uses JEDEC (Joint Electron Device Engineering Council),
          i.e. measuring in binary but using metric prefixes. I don't like this
          because metric defines kilo as 1'000, but you should not use base 10
          with computers. A byte is 8 bits, not 10!
        </p>
        <p>
          Storage manufacturers for whatever reason like to use Metric. That
          means 1 kB = 1'000 B. Which is strange, why use base 10? However, the
          big number is still base 2 inspired. So, 1, 2, 4, 8, 16, 32, 64.
          Except after that they don't strictly adhere to binary numbers. You
          usually get 240 and not 256, 500 and not 512. Marketing really is
          strange.
        </p>
        <p>
          So, when you buy a 16 GB USB stick, it really is 16'000'000'000 bytes.
          But no system measures in metric (decimal, base 10), so when you plug
          it in to Windows, it shows it being 14.9 GB (it's actually 14.9 GiB).
        </p>
        <p>Anyway, again, for reference:</p>
        <p>
          ✅&ensp;International Electrotechnical Commission (IEC)<br />
          &emsp;&emsp; 1.0 KiB = 1'024 B<br />
          &emsp;&emsp; Binary – Kibibytes (KiB), Mebibytes (MiB), Gibibytes
          (GiB)
        </p>
        <p>
          ❌&ensp;Metric system (SI)<br />
          &emsp;&emsp; 1.0 kB = 1'000 B<br />
          &emsp;&emsp; Decimal – Kilobytes (kB), Megabytes (MB), Gigabytes (GB)
        </p>
        <p>
          🚫&ensp;Joint Electron Device Engineering Council (JEDEC)<br />
          &emsp;&emsp; 1.0 KB = 1'024 B<br />
          &emsp;&emsp; Binary – Kilobytes (kB), Megabytes (MB), Gigabytes (GB)
        </p>
        <p>IEC preferred. Metric discouraged. JEDEC not acceptable.</p>
        <h2 id="ExtraOpinions">Extra opinions</h2>
        <h3 id="MeasurementsAndNumbers">Measurements and Numbers</h3>
        <p>
          I've noticed that Austria typically uses grams for measuring recipes.
          But some strange volume measurements are still being used. For
          example, the EL (Esslöffel, "eating spoon", "spoon used for eating"),
          the TL (Teelöffel, "teaspoon"), and apparently there's also a
          Kaffeelöffel ("coffee spoon")?? I'm not sure if EL is equivalent to
          the US tablespoon or if TL is equivalent to the US teaspoon. I'm also
          not sure what a coffee spoon is. I'd rather hope that such
          measurements are at least precise ones as you'd usually find in
          American recipes. "Any spoon that you happen to use for coffee" is
          dumb and inaccurate.
        </p>
        <p>
          Even if it's some precise measurement, these words aren't standardized
          everwhere. A teaspoon is ever so slightly different in the US and in
          the UK.
        </p>
        <p>Just use grams and mL.</p>
        <p>
          Speaking of grams, you know how we got them SI unit prefixes? Those
          are neat. So why do "tons" still exist? "Ton" is an informal word to
          mean a lot of something, some precise amount in the US, a different
          precise amount in the UK, and finally 1'000 kg.
        </p>
        <p>
          But, we have a prefix for 1'000 k-something. It's 1 M-something.
          Y'know: kilo, Mega, Giga, Tera
        </p>
        <p>Those align with thousands (3 digit long digit grouping)</p>
        <p>
          So why not say Mg? Megagram? Is it because people don't want to adhere
          to case-sensitivity? Milligrams are mg, with a lowercase m. Tons seem
          out of place when we have this system (SI).
        </p>
        <p>
          Also, do you see how our digit grouping is 3 digits long? Separated by
          thousands? And those SI unit prefixes mainly do that too? So why is
          the long scale for large numbers still used? Sure I can see some sense
          in it, but it still feels off. Surely I'm not just biased, am I?
        </p>
        <p>
          What I mean is that when you list off the big numbers in the short
          scale, it also feels like counting when you see their prefixes, look:
        </p>
        <p>
          &emsp; Million, billion, trillion, quadrillion, quintillion,
          sextillion, etc.
        </p>
        <p>Notice: Mi, Bi, Tri, Quad, Quint, Sex, Sept, Oct, Non, Dec, etc.</p>
        <p>
          I think it makes sense. But in the long scale, you separate them all
          by 10^6 instead of 10^3… why? And since you're still grouping by 3,
          you need weird "in-betweens":
        </p>
        <p>
          &emsp; Million, milliard, billion, billiard, trillion, trilliard, etc.
        </p>
        <p>Or apparently in traditional British:</p>
        <p>
          &emsp; Million, thousand million, billion, thousand billion, trillion,
          thousand trillion, etc.
        </p>
        <p>I prefer the short scale.</p>
        <h3 id="ExtraOpinions_NameStyle">Name Style</h3>
        <p>This will be a bit inceptive. Why are the names for names odd?</p>
        <p>
          First name is also called given name or forename.<br />
          Last name is also called surname or family name.
        </p>
        <p>
          Usually this is just a distinction between America and Commonwealth,
          is it? German seems to have all these too for some reason. Well, not
          quite. Perhaps one set is more formal than the other?
        </p>
        <p>
          First name seems to always be "Vorname".<br />
          Last name is obviously "Nachname", but then there's also
          "Familienname" (family name), which refers to the same thing. And then
          there also exists "Zuname", which apparently also refers to your last
          name?
        </p>
        <p>And then: Middle names.</p>
        <p>
          Apparently in German it's "zweiter Vorname" (second first name) or
          "weitere Vornamen" (additional first names).
        </p>
        <p>
          …but I don't consider a middle name a first name. It's not another
          first name. It sounds like it implies it's an alternate name someone
          can call me.
        </p>
        <p>
          Okay, well, looking on Wikipedia, apparently middle name is
          "Zwischenname". Which I guess <i>is</i> a bit better. But I haven't
          seen that on forms here.
        </p>
        <p>
          Middle names are kinda odd. I don't remember where or when I heard
          this from, but I was somehow told that middle names are to distinguish
          two people who happen to have the same first <i>and</i> last name. I'm
          not sure how accurate or correct that is.
        </p>
        <p>
          But it does seem to be the case that middle names are more common in
          the US than in Europe? Or maybe that's just strange bias and
          perception from the memories of child-me?
        </p>
        <h3 id="Time">Time</h3>
        <p>
          ISO 8601 does not tell you how to pronounce things. And it shouldn't
          anyway. But how do you say hours where the minute is 00?
        </p>
        <p>
          You know, saying the time, specifically the numbers in the 24-hour
          system is usually not super different than in the 12-hour system.
          "It's three forty-five PM" → "It's fifteen forty-five".
        </p>
        <p>
          But what about if it's 15:00? I've seen some say "fifteen hundred
          hours", which apparently comes from how the military says the time.
          Which I find dumb. Are you really saying "hundred" just because
          there's a 00 there? You do know that the day only has 24 hours, right?
          "fifteen hundred hours" would mean 1'500 hours which is 62.5 days,
          like, 2 months. Days don't have "hundred hours".
        </p>
        <p>
          Okay, well then what about "fifteen o'clock"? Some people online are
          against this. Why? Just because most clocks are 12-hour? "fifteen
          o'clock means fifteen of the clock which implies the clock is pointing
          at 15, but clocks don't have 24 hours": Well, we have all gotten used
          to both analog and digital clocks. When you hear "clock", both analog
          and digital clocks are in this category. Words can change their
          meaning, so why not just change this one if it really means what you
          say it means?
        </p>
        <p>
          To be honest, English is a bit of an outlier here. Most languages
          don't have this silly "o'clock" thing. They just say "hour" (e.g.
          Indonesian) or "clock" (e.g. German).
        </p>
        <p>
          So, if it's 20:00, I'll say "it's twenty o'clock". You know, people
          have also made clocks with 24 hours on them instead of 12.
        </p>
        <p>
          Side rant, isn't it quirky that clocks don't actually unambiguously
          tell you the time? Hence the phrase "a broken clock is right twice a
          day". I mean, yeah in most cases, you can just look outside to see
          whether it's ante meridiem (AM, before noon) or post meridiem (PM,
          after noon). But imagine an edge case where that's not possible and
          all you have is an analog clock. Yes, it tells you <i>some</i> time,
          but you have no clue whether it's before or after noon. A 24-hour
          analog clock or digital clock would be unambiguous.
        </p>
        <p>
          Y'know, also, some people set their digital clocks like this. Really?
          Is it that much of a clutter? If you're gonna use 12-hour, in my
          opinion, you should always say which half of the day it is.
        </p>
        <p>
          Funny fact: As a kid, I thought/invented that AM stands for "after
          midnight", and that PM stands for "past midday".
        </p>
        <p>
          Also, what about 12 AM and PM in 24-hour? Will I say "12 o'clock" and
          "0 o'clock"? Well, sure, why not? But I do still use "noon" and
          "midnight". I kinda prefer those, depending on context.
        </p>
        <p>
          Also, this should be obvious: Do NOT say something like "17:32 PM".
          This is simply plain wrong. You could say it's just redundant, but no.
          PM is always paired with AM; it's, like, binary. Saying "17:32 PM"
          implies there must also be a "17:32 AM". And there isn't. Our days are
          not 48 hours long.
        </p>
        <p>What about "casual time telling"?</p>
        <p>
          I don't really like this way of telling time. Just say it exactly. But
          hey, at least English is unambiguous about it compared to German.
        </p>
        <p>
          In English, you'd say something like "half past 8" or "quarter to
          noon". In German? You get no "past" nor "to". They don't say those for
          some reason. But they definitely could. But they don't. So instead you
          get "halb 9" and "drei viertel 1", I think. The latter I'm not even
          sure of, since they always leave out what I'd say is the
          <i>key word</i>!! So, when someone says "halb neun", which just means
          "half nine", they actually mean "half to nine". They could say "halb
          zu neun", but nobody does for some reason. Also, German seems to never
          use half-past, it's always half-to. As for the quarters, I don't know,
          I don't remember. I don't remember because it's ambiguous.
        </p>
        <p>
          Also, is it not strange that German otherwise uses 24-hour time, but
          in casual time telling, or I guess even just day-to-day speech
          sometimes in general, they use 12-hour? Why? And what about AM and PM?
        </p>
        <p>
          (Side rant again) Well you know German has a strange relationship with
          Latin in that they don't wanna use it except they do in specific
          cases. So, you could use "AM", "PM", "etc.", and "i.e." in German, but
          nope. Instead they prefer "morgens" (morning), "abends" (evening),
          "usw." ("und so weiter": and so on), and "d.h." ("das heißt": that is,
          that means). But when it comes to tenses in German, instead of saying
          "Mitvergangenheit", they'd rather say "Präteritum". As I'm writing
          this, I just checked the Wikipedia page, and apparently
          "Mitvergangenheit" is an Austrian term. Hm maybe this is why they use
          Latin-like words here. But why not the other ones I mentioned? Or,
          counter-question, why does English use them? This extends to grammar
          in general too, I believe. Like, instead of "männlich, weiblich,
          sächlich", they prefer "maskulin, feminin, neutrum", if I remember
          correctly. Then, in law, they use "Paragraf", and it's what they say
          when reading the § symbol. Hm, I wonder, do they use this symbol so
          often? It's on the German keyboard layout and is easily accessible by
          pressing Shift+3. Paragraph also has a German word, though: it's
          "Absatz". And it's used in law too. Which is then funny if you
          literally translate instead of localize some law reference, e.g. "§ 1
          Abs. 2" becomes "Paragraph 1 paragraph 2".
        </p>
        <p>
          So anyway, they sometimes say "morgens" ("morning" for AM) or "abends"
          ("evening" for PM). But not always. Peculiar.
        </p>
      </GlassCard>
      <GlassCard class="instructions">
        <h2 id="Instructions" class="no-top-margin">The Actual Guide</h2>
        <p>Assumptions:</p>
        <ul>
          <li>The directory <code>/usr/share/i18n/locales/</code> exists</li>
          <li>
            You prefer to use <code>nano</code> as your terminal text editor
          </li>
        </ul>
        <p>
          Please also read the actual GitHub repository for more information.
          There's also extra sources to read up on why KDE Plasma can be weird
          with locales.
        </p>
        <p>
          This should work fine on Debian-based distributions. I'm not sure
          about Arch. This doesn't work with out-of-the-box openSUSE Tumbleweed
          because it's missing <code>/usr/share/i18n/</code> for whatever
          reason.
        </p>
        <h3 id="instructions-1">1. Get the files</h3>
        <p>1.i. Clone the GitHub repository:</p>
        <CopyToClipboard
          width="wwwwide"
          string="git clone https://github.com/Talon125/eu-linux-locale.git"
        />
        <p>1.ii. Enter the repository:</p>
        <CopyToClipboard width="wwwwide" string="cd eu-linux-locale" />
        <h3 id="instructions-2">2. Install the locale</h3>
        <p>
          2.i. Move the locale file into the location where the other locales
          are:
        </p>
        <CopyToClipboard
          width="wwwwide"
          string="sudo cp en_150 /usr/share/i18n/locales/"
        />
        <h3 id="instructions-3">3. Using the locale</h3>
        <GlassCard class="no-top-margin" :clear="true">
          <h4 class="no-top-margin">Extra Steps for KDE Plasma</h4>
          <p>3.a. Create a backup of your <code>plasma-localerc</code>:</p>
          <CopyToClipboard
            width="wwwwide"
            string="cp ~/.config/plasma-localerc ~/.config/plasma-localerc.bak"
          />
          <p>3.b. Edit <code>plasma-localerc</code>…</p>
          <CopyToClipboard
            width="wwwwide"
            string="nano ~/.config/plasma-localerc"
          />
          <p>…to contain the following:</p>
          <GlassCard class="codeblock" :clear="true">
            <pre><code>[Formats]
LANG=en_150.UTF-8
LC_ADDRESS=en_AT.UTF-8
LC_COLLATE=en_150.UTF-8
LC_CTYPE=en_150.UTF-8
LC_IDENTIFICATION=en_150.UTF-8
LC_MEASUREMENT=en_150.UTF-8
LC_MESSAGES=en_150.UTF-8
LC_MONETARY=en_150.UTF-8
LC_NAME=en_AT.UTF-8
LC_NUMERIC=de_LI.UTF-8
LC_PAPER=en_150.UTF-8
LC_TELEPHONE=en_AT.UTF-8
LC_TIME=en_SE.UTF-8</code></pre>
          </GlassCard>
          <p>
            3.c. <code>en_AT</code> and <code>en_SE</code> exist for KDE but not
            for perl or whatever, so to suppress those error/warning messages,
            make pseudo-locales:
          </p>
          <CopyToClipboard
            width="wwwwide"
            string="sudo cp copy_en_150 /usr/share/i18n/locales/en_AT"
          />
          <CopyToClipboard
            width="wwwwide"
            string="sudo cp copy_en_150 /usr/share/i18n/locales/en_SE"
          />
        </GlassCard>
        <p>
          3.i. Enable the locale(s) by editing <code>/etc/locale.gen</code>…
        </p>
        <CopyToClipboard width="wwwwide" string="sudo nano /etc/locale.gen" />
        <p>
          (you should also create <code>/usr/local/share/i18n/SUPPORTED</code>)
        </p>
        <CopyToClipboard
          width="wwwwide"
          string="sudo nano /usr/local/share/i18n/SUPPORTED"
        />
        <p>…to add:</p>
        <GlassCard class="codeblock" :clear="true">
          <pre><code>en_150.UTF-8 UTF-8
en_AT.UTF-8 UTF-8
en_SE.UTF-8 UTF-8</code></pre>
        </GlassCard>
        <p>
          Note that the last 2 should only be added if you're on KDE Plasma.
        </p>
        <p>3.ii. Generate locales</p>
        <CopyToClipboard width="wwwwide" string="sudo locale-gen" />
        <p>3.iii. Set the system locale variables (either that'll be</p>
        <CopyToClipboard width="wwwwide" string="sudo nano /etc/locale.conf" />
        <p>or</p>
        <CopyToClipboard
          width="wwwwide"
          string="sudo nano /etc/default/locale"
        />
        <p>) to contain the following:</p>
        <GlassCard class="codeblock" :clear="true">
          <pre><code>LANG="en_150.UTF-8"
LANGUAGE="en_150:en"
LC_CTYPE="en_150.UTF-8"
LC_NUMERIC="en_150.UTF-8"
LC_TIME="en_150.UTF-8"
LC_COLLATE="en_150.UTF-8"
LC_MONETARY="en_150.UTF-8"
LC_MESSAGES="en_150.UTF-8"
LC_PAPER="en_150.UTF-8"
LC_NAME="en_150.UTF-8"
LC_ADDRESS="en_150.UTF-8"
LC_TELEPHONE="en_150.UTF-8"
LC_MEASUREMENT="en_150.UTF-8"
LC_IDENTIFICATION="en_150.UTF-8"</code></pre>
        </GlassCard>
        <h3 id="instructions-4">4. Reboot</h3>
        <p>4.i. Restart your system:</p>
        <CopyToClipboard width="wwwwide" string="sudo reboot now" />
        <p class="final-p">You should be able to see it working in SDDM too.</p>
      </GlassCard>
    </NavigationSideBySide>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/extra_fancy-headings';

p {
  text-align: justify;
}

.instructions {
  p {
    margin: 1em 0 -0.5em;
  }

  .final-p {
    margin: 1em 0 0.25em;
  }

  .codeblock {
    margin: 1em 0 0;
  }
}
</style>
