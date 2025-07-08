<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import PushButton from '@/components/PushButton.vue'
import ContactQuick from '@/components/ContactQuick.vue'
import ContactCard from '@/components/ContactCard.vue'
import CopyToClipboard from '@/components/CopyToClipboard.vue'
</script>

<template>
  <main class="container">
    <GlassCard title="Quick Links">
      <!-- <p class="text-center">Wanna get in touch with me?&emsp;:o</p> -->
      <div class="icon-group">
        <!-- <ContactQuick src="/icons/Discord.svg" toClipboard="oktalon" />
        <ContactQuick
          src="/icons/internet-mail.svg"
          toClipboard="talonszoradi@gmail.com"
        /> -->
        <ContactQuick
          src="/icons/GitHub_Personal.svg"
          href="https://github.com/Talon125"
        />
        <ContactQuick
          src="/icons/GitHub_School.svg"
          href="https://github.com/Oktalon-Szoradi"
        />
        <ContactQuick
          src="/icons/YouTube.svg"
          href="https://www.youtube.com/@oktalon"
        />
        <ContactQuick
          src="/icons/Reddit.svg"
          href="https://www.reddit.com/user/TalonS125/"
        />
        <ContactQuick
          src="/icons/Steam.svg"
          href="https://steamcommunity.com/id/Talon_S/"
        />
        <ContactQuick
          src="/icons/TETR.IO.svg"
          href="https://ch.tetr.io/u/talon"
        />
      </div>
      <div class="text-center space-above">
        I also play Minecraft sometimes. My GamerTag is:
        <CopyToClipboard width="auto" string="TalonS125" />
      </div>
    </GlassCard>
    <div class="card-group-two">
      <ContactCard title="Discord" src="/icons/Discord.svg">
        I've also got Discord on my phone, so I should be most
        responsive&emsp;:3
        <CopyToClipboard width="auto" string="oktalon" />
        <div class="text-justify">
          <p>
            <b>Fun Fact:</b>
            I also have a Discord account dedicated for school. Well, it was.
            During the distance learning era, 1-2 teachers decided to use
            Discord instead of Google Meet, so, as I do, I decided to separate
            personal and school.
          </p>
          I don't use it anymore. It's more of just a "note-to-self" account
          now. I log into it rarely. So... not gonna share it here lol.
        </div>
      </ContactCard>
      <ContactCard title="E-Mail" src="/icons/internet-mail.svg">
        Prefer electronic mail? I do check my emails from time to time.
        <CopyToClipboard width="auto" string="talonszoradi@gmail.com" />
        <p>This is my personal email address, by the way.</p>

        It's also my first one. I think I've had it for over a decade now? My
        mom made it for me back then, I think so I could have my own Nintendo
        Network ID and play Mario Kart 8 online on my Wii U.
      </ContactCard>
    </div>
    <ContactCard title="Git&shy;Hub" src="/icons/GitHub.svg">
      Learned Git and GitHub at school. Was also required to make an account for
      school&emsp;:p
      <br />
      I changed its email address, though, to preserve it, because it's the one
      hosting this very page! What was pretty cool back then when GitHub Copilot
      was new, I could get it for free by scanning in my edu card. Well first
      you had to be on a waitlist, then it changed to have you need GitHub
      Education, and nowadays it's... free.
      <div class="flex github-container">
        <div class="flex-item text-center github">
          <img class="resize" src="/icons/GitHub_Personal.svg" />
          <br />
          <!-- <p>My personal GitHub account which's got my own personal stuff.</p> -->
          <PushButton href="https://github.com/Talon125"> Personal </PushButton>
        </div>
        <div class="flex-item text-center github">
          <img class="resize" src="/icons/GitHub_School.svg" />
          <br />
          <!-- <p>
              My GitHub account which I used at school and still use
              occasionally.
            </p> -->
          <PushButton href="https://github.com/Oktalon-Szoradi">
            "School"
          </PushButton>
        </div>
      </div>
    </ContactCard>
    <div class="card-group-two">
      <ContactCard title="You&shy;Tube" src="/icons/YouTube.svg">
        <p>
          I upload OSTs of abandoned/obscure Tetris games, me playing similar
          games, explaining mechanics, and anything else that I find interesting
          and find high enough quality to make a video about.
        </p>
        My videos are CC BY-NC-SA licensed. I do not aim to monetize or make
        money or upload regularly. I'm not a YouTuber.
        <div class="text-center">
          <PushButton href="https://www.youtube.com/@oktalon">
            Talon S.
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Reddit" src="/icons/Reddit.svg">
        Really the only social media I use. I don't really post, just browse and
        sometimes comment. When I procrastinate, I'm likely scrolling around on
        this platform, if not binge-watching YouTube videos.
        <div class="text-center">
          <PushButton href="https://www.reddit.com/user/TalonS125/">
            u/TalonS125
          </PushButton>
        </div>
      </ContactCard>
    </div>
    <div class="card-group-two">
      <ContactCard title="Steam" src="/icons/Steam.svg">
        Hey, I guess here you can tell what kind of games I like from my
        library. I've got:
        <ul>
          <li>
            Bloons {TD 5 | TD 6 | TD Battles | TD Battles 2 | Monkey City}
          </li>
          <li>Ninja Kiwi Archive</li>
          <li>Plants vs. Zombies</li>
          <li>Geometry Dash</li>
          <li>Terraria</li>
          <li>Portal {1 | 2}</li>
          <li>Puyo Puyo Tetris {1 | 2}</li>
          <li>Tetris Effect: Connected</li>
          <li>Deltarune</li>
        </ul>
        There's also a couple things in my wish list, like Patrick's Parabox and
        Junxions.
        <div class="text-center">
          <PushButton href="https://steamcommunity.com/id/Talon_S/">
            Talon_S
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard
        title="Notris Foes / Spirit Account"
        src="/icons/NotrisFoes.svg"
      >
        <p>
          Notris Foes is a revival of Tetris Friends. This game brings me
          nostalgia, as I played it quite a bit in my childhood. When I saw it
          was going to shut down at the end of May 2019, I started playing it
          much more and actually got into Tetris, i.e. learning T-Spins and all
          that.
        </p>
        <p>
          It's still very much work-in-progress, however. So the link to my
          profile won't actually show you anything. But the ID is my account
          tho&emsp;:p
        </p>
        There's also a different thingy called Spirit Account, which aims to
        bring back those old Facebook Flash games, like Tetris Battle (which I
        didn't play much back then). Development here's a bit more active.
        <div class="text-center">
          <PushButton
            href="https://notrisfoes.com/users/profile.php?id=7100829"
          >
            Notris Foes
          </PushButton>
          <PushButton href="https://spiritaccount.net/users/2723">
            Spirit Account
          </PushButton>
        </div>
      </ContactCard>
    </div>
    <div class="card-group-two">
      <ContactCard title="TETR&shy;.IO" src="/icons/TETR.IO.svg">
        TETR.IO is a great game and I really like it. I'm also pretty good at
        it. I was able to complete Sprint (clear 40 lines as fast as you can) in
        just under 30 seconds!
        <a href="https://www.youtube.com/watch?v=QfKQxmooRfY" target="_blank"
          >Check it out here!</a
        >
        <div class="text-center">
          <PushButton href="https://ch.tetr.io/u/talon"> TALON </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Nuke&shy;tris" src="/icons/Nuketris.svg">
        <p>
          This here is very minimal compared to TETR.IO. I don't play it much. I
          think it was kinda popular in 2021?
        </p>
        This game has O-Spins lol
        <div class="text-center">
          <PushButton href="https://nuketris.com/user?username=Talon">
            Talon
          </PushButton>
        </div>
      </ContactCard>
    </div>
    <div class="card-group">
      <ContactCard title="RŌBLOX" src="/icons/Roblox.svg">
        <div class="buttons-first text-center">
          <PushButton href="https://www.roblox.com/users/70005867/profile">
            XxAwesomeGamerDudexX
          </PushButton>
          <!-- <br /> -->
          <PushButton href="https://www.roblox.com/users/61890918/profile">
            Taloncool5
          </PushButton>
          <PushButton href="https://www.roblox.com/users/56790371/profile">
            Talonblue5
          </PushButton>
          <PushButton href="https://www.roblox.com/users/49632123/profile">
            oktalon
          </PushButton>
        </div>
        I'm a RŌBLOX veteran&emsp;:p<br />
        I don't play it much anymore, though.
        <p>Alright. Why do I have 4 accounts?</p>
        <p>
          So, I joined RŌBLOX in late 2013 under the username <b>oktalon</b>,
          since my friend recommended it to me lol (so I kinda technically know
          this game since 2012, I think). The thing is, however, I signed up
          using my dad's Facebook account (yeah that used to be an option back
          then. As well as not needing an account at all). One day we were at
          Panera Bread, and my parents needed the laptop I played on, so I had
          to use our other one. I don't remember what I did, but a new account
          was made... (<b>Talonblue5</b>). So I somehow lost my old account. I
          wasn't happy and wrote in the About Me "THIS IS NOT ME" lol.
        </p>
        <p>
          At some point I decided to make another account, <b>Taloncool5</b>,
          and actually played with this one for a while. But like what happened
          last time, at some point something happened because the Facebook login
          is <i>weird</i>, and I lost access to that one too. I then decide to
          make an actual account with a password and all that instead of just
          using my dad's Facebook. Probably because by now I had my own email
          address. I can't quite remember, but I think I accidentally made a few
          accounts and forgot the password. But I ended up on
          <b>XxAwesomeGamerDudexX</b>. Yeah... 9-year-old me thought that was a
          cool username. Since I saw other people also put Xs around their
          usernames.
        </p>
        <p>
          RŌBLOX, or maybe I should write ROBLOX instead, then goes on to
          change. A lot. In my opinion, it feels too corporate now. The website
          looks like some generic clothing store, and fun terms like "Builders
          Club" are now replaced with boring generic words like "Premium".
        </p>
        <b>Fun Fact:</b> The icon I'm using here is my SVG recreation of the old
        RŌBLOX icon! It's not perfect and kinda looks odd in some places if you
        really zoom in on some parts, but at a small-ish size like 128&times;128
        it's pretty close to the original!
      </ContactCard>
    </div>
    <div class="card-group-two">
      <ContactCard
        title="speed&shy;run&shy;.com"
        class="no-hyphen"
        src="/icons/speedrun.com.svg"
      >
        I kinda only used this once. Playing Tetris Party Deluxe in an emulator.
        Maybe I'll use this again in the future. Probably not, though. I'm not
        too much of a speedrunner lol
        <div class="text-center">
          <PushButton href="https://www.speedrun.com/users/TalonS">
            TalonS
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Virus&shy;Total" src="/icons/VirusTotal.svg">
        I also only kinda used this just once. To leave comments and ratings on
        some scam websites. Because... I felt like it at the time, I guess.
        <div class="text-center">
          <PushButton href="https://www.virustotal.com/gui/user/TalonS125">
            TalonS125
          </PushButton>
        </div>
      </ContactCard>
    </div>
    <div class="card-group-two">
      <ContactCard title="Trevor&shy;Space" src="/icons/TheTrevorProject.svg">
        <p>
          Ooo, a forum! I... don't really use forums. I made an account and
          filled out my profile, but didn't post in any topic/category. Maybe
          I'll use this in the future?
        </p>
        <img class="inline-icon" src="/icons/dialog-warning.svg" />
        You'll need to already have a TrevorSpace account to view my profile.
        <div class="text-center">
          <PushButton
            href="https://www.trevorspace.org/profile/557464-talon-s/"
          >
            Talon S.
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Win&shy;Classic" src="/icons/WinClassic.svg">
        <p>
          Again, I don't really post. But I'd say I use this more often, since
          the stuff in this forum interests me quite&emsp;:p
        </p>
        <img class="inline-icon" src="/icons/dialog-warning.svg" />
        You'll need to already have a WinClassic account to view my profile.
        <div class="text-center">
          <PushButton href="https://winclassic.net/user/2987">
            Talon
          </PushButton>
        </div>
      </ContactCard>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.card {
  text-align: justify;
}

.button-icon {
  width: 24px;
}

.icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
}

.buttons-first {
  margin: -1em 0 1.25em;
}

.card-group-two {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;

  > * {
    flex: 1;

    @media (width <= 576px) {
      margin: 0 1em;
    }
  }

  @media (width <= 768px) {
    gap: 0;
  }

  @media (width <= 576px) {
    flex-direction: column;
    gap: 2em;
    margin-top: 2em;
  }
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 2em;

  > * {
    flex-grow: 1;
    margin: 0;

    @media (width <= 576px) {
      margin: 0 1em;
    }
  }
}

.resize {
  margin: -32px;
}

.space-above,
.github {
  margin-top: 1em;

  :deep(a) {
    margin-top: 1em;
  }
}
</style>
