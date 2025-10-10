---
title: "Distributed Synthesis - Milestone 2"
author: "Thomas Capogreco"
date: "2025-08-29"
bibliography: distributed_synthesis.bib
csl: apa.csl
documentclass: article
geometry: margin=1in
fontsize: 12pt
linestretch: 1.5
header-includes:
  - \renewcommand{\thesubsection}{\thesection.\alph{subsection}}
  - \renewcommand{\thesubsubsection}{\thesubsection.\roman{subsubsection}}
---

# Abstract {.unnumbered}
Browser-based distributed synthesis is a novel, lithe technique for co-located networked music performance that leverages the ubiquity, connectivity, and computational capacity of our personal devices to achieve multi-channel sonic works.  It continues a lineage of historical networked and participatory music performance practices that make use of contemporaneous technology to agitate hegemonic, commodified forms of music performance ritual.  The paradigm repurposes the substrate of the internet as its artistic materials, aligning the practice with the educational project of creative coding, and entangling it in the messy problematics of surveillance and platform capitalism.  This research employs a critical posthumanist frame to clarify an ethical position from which creative work can be produced in this arena, with particular focus on the themes of texture, ritual, and emergence.


# Introduction {.unnumbered}

The purpose of this document is to articulate a literature review that situates distributed synthesis within the confluence of a set of material-discursive cultural practices which includes *synthesis*, *creative coding*, *networked and participatory music*, and *phone art*, histories which have overlapped, bifurcated, and converged at certain moments in sometimes surprising and interesting ways.  While the explicit purpose is to help map out a location for my research, I wish to also acknowledge the role that these sorts of texts can play as an *origin story* - implicitly setting the normative coordinates of a project's trajectory. [@rodgersPinkNoisesWomen2010]  It is with this in mind that wish to use this introductory section to explain my general approach in putting this review together.

To clarify what is meant by a "material-discursive cultural practice", we might understand *synthesis*, for example, to denote not merely the production of an audio signal comprised of fluctuating voltages in a wire, but also both the productive practices that give rise to various material forms of the synthesiser, *and* the various uses of those material forms in production of *expressive* cultural forms.  Similarly, we might understand *creative coding* to denote not merely the production of specific pixels of particular colours on a screen (for example), but also both the cultural practices which scaffold audiences to experience creative coding as *expressive* in some way, *and* the productive practices that give rise to the various programming languages, computing hardware, and educational resources etc. -- the material forms on which those cultural practices are predicated.

My use of the word "expression" here should be scrutinised. As I will argue in a later chapter, when used in the context of creative cultural practices, "expression" denotes the construction of a mirage - the unalienated human subject - the performer or artist, as percieved within the context of some ritualistic cultural infrastructure.  This image then acts as a nexus, an interface for inference between a semantic field of representation, and a pragmatic field of possibility.  There is a lot to be extrapolated in this dynamic, but for the moment I think it is important that we are able to understand *expression* to be fundamentally entangled with notions of what the word "work" might mean, via the normative inferential relations implicit in the construction of this Vitruvian mirage. [@brandomArticulatingReasonsIntroduction2009; @braidottiPosthuman2013]

I bring these notes forwards into the literature review so that we can give these material-discursive cultural practices their properly ecological standing -- it is not possible for the history of synthesis, nor the history of computing (creative or otherwise), to be understood as a succession of white male inventors who made great discoveries by scouring the internal resources of their own, encapsulated genius.  Rather, I will attempt to give a more mundane perhaps, but more realistic, and ultimately much richer account, not of heroic inventors, but of *workers* (plural), of all genders and denominations.  Touching-feeling end-nodes, collaborating intimately with the texture of materials, not just in the production of material forms, but in the simultaneous co-evolution of material and cultural forms. [@sedgwickTouchingFeelingAffect2003; @tomlinsonMillionYearsMusic2015]

This work inevitably occurs in the context of a productive, self-propagating, polyphonic entanglement of cultural, economic, and institutional structures -- inevitably some interdisciplinary centre, institute, or laboratory signifying an interstitial space where a sets of workers have had the inclination, and freedom, to set the parameters of their work.  We might compare the creativity of these assemblages to networks of mycelium in the soil of a transitional ecology, growing omnidirectionally, slowly accumulating reciprocating relationships, transforming their environments just as they themselves grow and transform.  Given just the right material and cultural conditions, these mycelial networks grow to a critical density, at which point they produce a fruiting body. [@tsingMushroomEndWorld2017; @sheldrakeEntangledLifeHow2020]

In the literature review that follows, I attempt to tell a story of mycelial assemblages -- material-discursive practices producing both material and cultural forms -- their fruiting bodies.  These fruiting bodies release spores via cultural activity, and it is here that the cyborgian circuit is closed:  these spores retain some DNA of their originary mycelial assemblage -- techniques, values, aesthetic logics, and, importantly, notions of what "work" could be.  In this way, I hope to situate the coordinates of my research project, distributed synthesis, here in the soil of the transitional ecology that lives in and around the walls of the School of Design at RMIT.


# Synthesis

My fascination with analog synthesisers began in what Rodgers, and other synthesiser historians, term the "analog revival" of the early 2000s. [@pinchAnalogDaysInvention2002; @rodgersTinkeringCulturalMemoryGender2015; @frekeSynthesizerEvolutionAnalogue2020]  At the time, just as now, the attraction seemed to be just as much about the objects themselves -- their *material forms* -- as the role they play in making various styles of music -- those *cultural forms* that ostensibly inform synthesisors' design and purpose.  This dynamic is evident in the internet forum trope depicting synthesiser enthusiasts as obsessive neurotics hoarding vast collections of synthesisers, but never releasing any music.  [@mylarmelodiesPerhapsReleasingMusic2025]  We might also acknowledge the birth of the term "gear acquisition syndrome" (GAS), as denoting a similar phenomenon -- a spontaneous propensity to inhabit an autotelic relation which luxuriates in the material form, and which is in no hurry to fulfil its extant teleology in a concretely expressed cultural form. [@herbstGearAcquisitionSyndrome2021]

When speaking about synthesis, even more than its material or cultural forms, it is before the spontaneous phenomenon of synthesised sound that we must make ourselves accountable.  It is here that I wish to make a distinction between *expression*, which indexes the human within the semantics of ritual; and *texture*, which indexes materiality within the pragmatics of touch. [@sedgwickTouchingFeelingAffect2003; @RizvanaBradleyVicissitudes2020]

Synthesis, understood in this way, represents the continuation of what Tomlinson describes as a co-evolutionary feedback process that entangles the development of musical practices (cultural forms) not only with the production of musical instruments (material forms), but with the appearance of modern subjectivity. [-@tomlinsonMillionYearsMusic2015]

To illustrate the mechanics here, I would like to invoke Brandom's rejuvination of Kant's key philosophical contribution - that we are constituted, as language users, by the normative commitments required for language use. [@brandomArticulatingReasonsIntroduction2009]  The argument being that pre-verbal children -- infants and toddlers -- do not hear *language* per se.  What they hear, is *music*.  They do not parse words and signifiers and syntax, etc. but rather, what they have to work with are sounds -- sounds with pitch, rhythm, timbre, volume, etc.  -- the constituent elements of music.  Caregivers will accentuate the musicality of their prosody when directing their speech towards infants, and will repeat, and gesticulate.

I would like to highlights two important points: 1) what the infant finds in the sound of their caregivers' prosody is a primeval sense of correctness -- an invitation to adopt the set of normative commitments required for language use; and 2) that what the adoption of these commitments entitles the language user to is exactly the affordance of *representation*.  In this way I wish to define: 1) music as that which by permeating a primeval sense of correctness, invites you to adopt some set of implicit normative commitments; and 2) language, as being a superset of music -- music with the added affordance of representation.

A final step is required before we arrive at the Man of Logos, as here in music, the traces of subjectivity's construction are too palpable, the umbilical cords to the matrixial, too visible. [@ettingerMatrixialBorderspaceVolume2006]  The construction of the man of pure reason requires us to erase any trace of music's role in scaffolding us into the world of representation and intelligibility. Surely we must hear exactly such a disavowel in Pinker's now infamous assertion about music being nothing more than "evolutionary cheesecake". [@pinkerHowMindWorks1997]  As Rogers points out, rugged masculinity requires the apparatus of reproduction -- the mother -- *music* -- to be rendered invisible. [-@rodgersIntroduction2010]

And so it is perhaps somewhat fitting that we start the story of synthesis with a mythical Great Mother -- Rhea, of Ancient Greece.

## Gamelan

Before we get to the Great Mother, one could mount a good argument that the story of synthesis should in fact begin in Java, in the forge of the god-king Sang Hyuan Guru.  According to legend, the first gongs were fashioned here for the purposes of communication with other gods. These *Gamelan* feature inharmonic overtones and are played in detuned pairs, such that the summation of acoustic signals in the air of their shared space produces constructive and destructive interferance -- acoustic beating similar to low frequency amplitude modulation. [@spillerGamelanTraditionalSounds2004]

This is interesting for two reasons: 1) like distributed synthesis, Gamelan's shimmering effect is produced via the co-location of what Bown refers to as a *media multiplicity* [-@bownUnderstandingMediaMultiplicities2018; -@bownCreativeMediaInternet2018], and 2) the very precise engineering and mathematics required to produce this effect was achieved via embodied craftmanship -- practices which evolved over time and were passed down through the generations without the help of formal mathematics or measurement apparatuses. [@spillerGamelanTraditionalSounds2004]

## Fingers of the Earth and Sky

Simultaneously, human life around Mount Ida in Crete had found the structure of religious cults, which functioned as communities of practice, cultivating sets of emergent, bronze-age technologies such as smelting and metallurgy.  These religious cults were differentiated and united by of the which Idaean Dactyl they worshipped, and it was around the mythic logic of the Idaean Dactyls that life in these communities was organised.  The Idaean Dactyls were a mysterious brotherhood of demigod attendants to the Great Mother -- Rhea (herself the daughter of Gaia and Uranus, earth and sky) -- tasked with concealing the existence of Zeus, Rhea's sixth child, from Cronus, who was Rhea's husband and father of her children.  Cronus was paranoid about a prophecy which foretold that he would be overthrown by one of his offspring, and so had eaten each of their previous five children: Hestia, Demeter, Hera, Hades, and Poseidon. [@burkertLoreScienceAncient1972]

In service to the Great Mother, the Idaean Dactyls were to create a deafening clamour to drown out baby Zeus' cries, disguising his whereabouts, and protecting him from his jealous father Cronus.  The clamour was that of industry, of work and technē: the sounds of the iron forging and metallurgy, the clanging of hammers on anvils, and of spears on shields. [@burkertLoreScienceAncient1972]

We might note a few things 1) some spontaneous similarity here with Freud's myth of the primal father and the mechanics of modern, neurotic subjectivity [@freudTotemTaboo2012]; 2) the Idaean Dactyls (the "fingers of Ida") association with hands - which Leader would argue, even more than our heads or brains, represents the locus of human normativity [@leaderHandsWhatWe]; and 3) that what we find in this story is an entanglement of the mechanics of subjectivity with not only emergent material and cultural forms, but also the types of work on which those forms are predicated.


## Music from the Forge

It is from within the context of the Idaean Dactyls that we must understnd the allegorical function of the story of Pythagoras in the forge.  The story goes that as Pythagoras was walking past the smithy, he heard something musical in the clamour of the various hammers hitting their respective anvils.  This music drew him into the smithy, it *hauled his body* -- to borrow a phrase from Loveless [-@lovelessHowMakeArt2019] -- towards the materialality of the hammers.  Upon investigation, Pythagoras ascertained that the pitch of the hammers' sounds were proportionally correlated with their weights. [@burkertLoreScienceAncient1972]

The story itself is highly dubious -- the pitch a hammer makes is is not strictly proportional with its weight, but contingent on other properties such as its dimensions and shape.  What is perhaps more noteworthy about this story than this "insight", is how it acted historically to intervene in the functioning the pre-existing, hegemonic mythos of the Idaean Dactyls. [@burkertLoreScienceAncient1972]  The story of Pythagoras in the forge shifts the locus of episteme from divine providence, to the province of Human Intuition.  It is important that we pause here to feel the normative force of Rosi Braidotti rolling her eyes: it is Pythagoras' genius that allows him to correlate pitch with string or pipe length, and the subsequent belief that harmony must be constituted by frequency relationships involving low integer fractions.


- they turned this insight into a religion where they worshipped mathematics, especially the integers 1, 2, 3, and 4.
- they literally constructed the man "Pythagoras", who came to occupy the role of governing signifier
- the themes of synthesis are present here: blacksmithery -> material forms, music -> cultural forms, and mathematics -> engineering / DSP / etc.
- fundamental logics are set here in this story - about mathematics, harmony, and eternal forms (which Plato would later generalise to include all forms, not just numbers)
- the story represents a shift in attribution regarding the origins of the crafts these artisinal religious cults were cultivating, from the Divine, to the Man.  A more prozaic retelling, one that sheds our third conceit, would understand this correlation to have become apparent through the distributed cognition of a materio-discursive assemblage, shifting attribution one step further, from the Man, to the Ecological.


## Helmholtz & The Ear
- Helmholtz: the ear as instrument for the Vitruvian subject inside the brain
- Strumpf
- the ear as constitutive of embodied cognition / the mirror on which subjectivity is constructed

## Pierre Schaeffer & Maryanne Amacher
- Schaeffer: reduced listening is "apprehending the sound in itself", ie. sound without context
- Amacher: structure borne sound, ie.
- Hempton:  we have no ear lids

## Varese & Crystallisation
- definitions of music



# Networked & Participatory Music Performance


## Key Concepts & Terminology
### Networked Music Performance (NMP)
### Mobile Music
### Participatory NMP
### Local Nework Music

## Pioneering Works & Practitioners
### Pre-Smartphone Era
### The Rise of Laptop Orchestras
### The Smartphone Orchestra
### Web-Based Participation

## Frameworks & Platforms
### soundworks (IRCAM)
### Collab-Hub
### PeerJS / SimplePeer

## Relevance
### Shift in Framing
### Technological Contemporaneity
### Media Archeology & Critical Infrastructure Studies

# Creative Coding & Live Coding as Cultural Practice

## Ethos of Inclusion
### Historical Precedent
### Foundation Texts
### Radical Commitment to Access
### Pedagogy & Community

## Live Coding as a Community of Practice
### The Practice
### TOPLAP & the Manifesto
### TidalCycles as a Vehicle

## Competing Frameworks
### Research-Creation
### Critical Making

# Practitioners of Critical Posthumanism

## Synthesis

## Computer Music
### John Chowning of Center for Computer Research in Music & Acoustics (CCRMA)
### Miller Puckette of Institute for Research and Coordination in Acoustics/Music (IRCAM)
### James McCartney of SuperCollider
### Alex McLean of TidalCycles

## Eurorack
### Tom Erbe of SoundHack
### Tony Rolando of MakeNoise
### Peter Edwards of Casper Electronics
### Brian Crabtree of Monome
### Andrew Fitch of NONLINEARCIRCUITS


## Creative Coding
### Rosa Menkman
### Dan Shiffman
### Lauren Lee McCarthy of p5
### Sam Levine

# Critical Theories of Technology, & Sound

## Platform & Surveillance Capitalism
## Sound, Listening, & Power
## Media Archaeology & Posthumanism

# Ritual, Performance, & Media Studies

## Performance as Ritual
## Affect Theory & Emergence

## Media Ecology & Liveness
### Media Ecology
### Liveness in a Digital Context


# Discussion {.unnumbered}

Discuss the implications of your results.

# Conclusion {.unnumbered}

Summarize your work and future directions.

# References {.unnumbered}

::: {#refs}
:::
