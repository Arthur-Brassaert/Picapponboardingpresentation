
PicApp
Closing the Activation Gap Through Onboarding
Final Project Report
Blended Intensive Programme (BIP) 2026
Project	PicApp — Event-based Ride-Sharing (Sweden)
Group	Group 1
Team Members	Omar (Inholland) · Arthur (VIVES) · Asmus (Zealand) · Léonard (IUT) · Felicia (Borås)
Client	Per Anders Hovbom — PicApp Sweden AB
Coach	Jan Willem Crabbendam — Hogeschool Inholland
Core Deliverable	Interactive Onboarding Prototype + Final Report + Presentation
Date	April 2026
 
Executive Summary
PicApp is not broken. It has a working ride-matching engine, a clear event-based concept, and real users. What it does not have is a guided first experience. New users sign up, land on a screen full of options, and are left to figure out the platform on their own. Industry research on mobile apps in this condition consistently reports that the majority of new users abandon the app within the first session — often before completing any meaningful action. PicApp does not currently measure where its own users drop off, but its slow organic growth at roughly 150 registered users is consistent with the same pattern. Closing this activation gap through a well-designed onboarding journey is the entire focus of this project.
PicApp is a Swedish event-based ride-sharing platform connecting drivers and passengers travelling to concerts, festivals, and sporting events. At the start of this project, it had approximately 150 registered users, no onboarding system, and no telemetry to measure where users were dropping off. The client described the problem in his own words: users log in, create an account, and then there is nothing — no guide, no direction.
Our solution is a structured six-stop onboarding journey, designed as a visual road metaphor: a small green car travels along a winding road from one stop to the next, mirroring the user's progress through five teaching stops and one final recap. Each stop addresses one of the questions a new user implicitly asks: What is this app? How does it work? Is it safe? What does it cost? What is my role? Am I ready?
The design is grounded in two complementary theoretical frameworks that justify every interaction choice. Self-Determination Theory (Deci & Ryan, 1985) provides the structural foundation: each stop is engineered to satisfy the three basic psychological needs of autonomy, competence, and relatedness. The Zeigarnik effect (1927) shapes the visual progression: an unfinished road with a moving car creates a persistent psychological pull toward completion that no progress bar can match.
This report focuses on the onboarding journey as the core deliverable. The home screen and AI-assisted help are deliberately treated as secondary, complementary features — they exist in the prototype to demonstrate the post-onboarding context, but they are not the primary contribution and may be developed further in subsequent project phases.
 
Table of Contents
1.  Introduction   ...................................................   4
2.  Project Context & Stakeholders   ...................................................   5
3.  Problem Analysis   ...................................................   6
4.  Why Onboarding — Strategic Justification   ...................................................   7
5.  Theoretical Foundation   ...................................................   10
6.  Research & Methodology   ...................................................   12
7.  The Onboarding Journey — Core Solution   ...................................................   13
8.  Justification of Each Stop   ...................................................   15
9.  Secondary Features (Home Screen & AI Help)   ...................................................   18
10.  Prototype Implementation   ...................................................   19
11.  Feasibility Analysis   ...................................................   20
12.  Expected Impact   ...................................................   21
13.  Recommendations for PicApp   ...................................................   22
14.  Final Presentation Outline   ...................................................   23
15.  Conclusion   ...................................................   24
16.  References & Appendices   ...................................................   24
 
1. Introduction
1.1  About This Report
This document is the final deliverable of Group 1's contribution to the Blended Intensive Programme (BIP) 2026. It consolidates the work carried out between February and April 2026 on behalf of PicApp Sweden AB. The report is structured around a single, focused contribution: a complete onboarding journey designed to close the activation gap that currently costs PicApp the majority of its new users.
The core deliverable is the onboarding journey. Two additional components — a refreshed home screen and a contextual AI-assisted help surface — are present in the prototype to demonstrate context and integration, but they are intentionally treated as secondary features in this report. They are scaffolding around the core, not the core itself.
1.2  About the BIP Programme
The Blended Intensive Programme is an Erasmus+ initiative that brings together students and lecturers from multiple European higher education institutions to collaborate on a real-world industry case. BIP 2026 combined online sessions from February onwards with a one-week on-site collaboration in Bruges, hosted at VIVES University of Applied Sciences.
1.3  About PicApp
PicApp Sweden AB operates an event-based peer-to-peer ride-sharing platform built on Laravel, PHP, and Vue 3. The concept is simple: drivers heading to a concert, festival, or sporting event can offer empty seats to other attendees in exchange for a small contribution toward fuel costs. At the start of this project, the platform had approximately 150 registered users and no active marketing.
1.4  The Client Brief
During the kickoff on 15 February 2026 and the follow-up client meeting on 12 March 2026, Per Anders Hovbom (PicApp) confirmed that the matching engine and the ride-posting flow already work well. The client explicitly did not want us to rebuild existing functionality. Instead, he asked our team to address the moment immediately after sign-up:
Users log in, create an account, and then there is nothing. No guide. No direction.
This sentence defined the entire scope of our project. Everything that follows in this report is a direct response to it.
 
2. Project Context & Stakeholders
2.1  Team Composition
Group 1 consists of five students from five different European institutions. International collaboration was both an opportunity and a logistical challenge, given the different academic calendars, time zones, and native languages.
Member	Institution	Country	Focus Area
Omar	Hogeschool Inholland	Netherlands	Non-functional requirements, report, and prototype support
Arthur	VIVES	Belgium	Prototype design and implementation
Asmus	Zealand	Denmark	Gap analysis and system goals
Léonard	IUT	France	Project planning and documentation
Felicia	Borås	Sweden	Client liaison and problem definition

2.2  Stakeholder Map
•	PicApp (Client) — High influence. Sets the business context, defines what is in and out of scope, and validates the direction at every milestone. Managed through scheduled Zoom meetings.
•	New users (Primary end users) — The group the solution is designed for. Not directly consulted due to scale, but represented through personas and the stated client problem.
•	Existing users — Indirectly affected. A better onboarding system grows the user base, which strengthens the platform's network effects.
•	Coach (Jan Willem Crabbendam) — Provides methodological guidance and academic rigour.
•	Project Team — Responsible for delivery. Coordinated through weekly Zoom meetings, shared Google Drive, and WhatsApp for informal communication.
2.3  Scope
In Scope (Core)	Out of Scope / Secondary
Onboarding journey design and justification	Building inside PicApp's live Vue 3 codebase
Theoretical grounding (SDT and Zeigarnik effect)	Production-ready, scalable product
Interactive prototype demonstrating the journey	Large-scale user testing
Final report and presentation	Home screen and AI help — present as secondary features only, not the focus
Recommendations for implementation roadmap	Rebuilding the matching engine (already works)
 
3. Problem Analysis
3.1  What We Know, What We Infer, and What We Cannot Measure
Before describing the problem, we make an explicit distinction between three categories of evidence that this report draws on. This distinction matters because PicApp does not currently collect behavioural telemetry, which means parts of the problem are observable directly while other parts must be inferred from external sources. Being precise about which is which protects the integrity of every recommendation that follows.
What we know directly
•	PicApp has no structured onboarding system. After sign-up, the user is dropped directly into the live application interface.
•	The client described the situation in his own words at the 12 March meeting: "users log in, create an account, and then there is nothing — no guide, no direction."
•	PicApp has approximately 150 registered users after extended operation, with no active marketing pushing growth.
•	PicApp has no behavioural telemetry. There is no measurement of how many users complete sign-up, how long they stay, or where they leave.
What we infer
•	That the absence of onboarding is a major contributor to slow user growth and weak conversion from sign-up to first action.
•	That a structured onboarding journey will materially improve activation, retention, and the network effects PicApp depends on.
These inferences are based on industry research, not on PicApp-specific data. The published literature on mobile app activation is consistent enough that the inference is well supported, but it remains an inference.
What we cannot measure today
•	The actual percentage of users who abandon PicApp in the first session.
•	The exact step or screen at which users leave.
•	The current Day-1, Day-7, or Day-30 retention rate.
This absence of measurement is itself part of the problem. A platform that cannot measure where it loses users cannot improve in a targeted way. One of our recommendations is therefore that PicApp instrument the new onboarding journey from day one, so that the inference becomes a measured fact going forward.
3.2  The Conditions That Produce Activation Gaps
Mobile app research consistently identifies a small number of structural conditions that produce high early drop-off. PicApp exhibits all of them simultaneously. Industry benchmarks (Localytics, Quettra, Appcues) place the typical first-session abandonment rate for apps in this condition between 70 and 90 percent, with a median around 80 percent. We do not know PicApp's specific number, but the conditions are present and there is no reason to assume PicApp is an exception to a pattern observed across thousands of apps and millions of users.
The five structural conditions and their corresponding gaps in PicApp's first-session experience are:
Structural Condition (present in PicApp)	Addressed By
New users have no introduction to what the app actually is or what makes it different from generic ride-sharing.	Stop 1 — What is PicApp?
New users cannot quickly grasp the mechanic — how posting, matching, and confirming a ride actually flow.	Stop 2 — How it works
Carpooling with strangers is inherently a trust problem. Users have no signal that the platform protects them.	Stop 3 — Safety and trust
Users do not know what a ride costs, how payment is handled, or whether they will face surprise fees.	Stop 4 — Pricing
Users have no defined role on the platform — driver, passenger, or both — and cannot tailor their experience.	Stop 5 — Your role

Each condition is itself a question the user is asking implicitly when they open the app for the first time. None of these questions has an answer in PicApp's current state. The cumulative effect — five unanswered questions hitting at once — is what produces the activation gap industry research describes.
3.3  Why We Believe the Solution Will Help
Because we cannot measure PicApp's current drop-off, we also cannot prove improvement in advance. What we can do is rest the inference on the strongest available external evidence:
•	Apps that introduce structured onboarding consistently see activation lifts of 30 to 50 percent in the first session (Appcues 2025).
•	Day-7 retention typically increases by a factor of two to four when structured onboarding is added (UXCam 2025).
•	Time-to-first-value drops by 35 to 45 percent with personalised, role-aware flows (WalkMe 2023).
These lifts are observed across thousands of apps in many categories. They are the closest available proxy for what we expect at PicApp. The expectation is reasonable; it is not a guarantee. Section 12 (Expected Impact) revisits these projections in detail and explicitly flags them as benchmarks rather than measured outcomes.
3.4  Problem Statement
PicApp has a functional product but no structured path from sign-up to first value. The conditions known to produce high early drop-off are all present, and the platform's slow organic growth is consistent with this pattern. Our project responds by adding the missing onboarding journey, designed to address each of the five structural conditions in sequence, and recommending that PicApp instrument the new system so the effect can be measured rather than inferred going forward.
3.5  Success Criteria
•	Address each of the five identified structural conditions through a corresponding stop in the onboarding journey.
•	Be implementable in PicApp's existing Laravel / PHP / Vue 3 stack without major refactoring.
•	Work immediately at the current scale of 150 users, with no behavioural data required at launch.
•	Be theoretically defensible — every interaction choice grounded in established psychological research.
•	Include the instrumentation needed for PicApp to begin measuring its own activation funnel from day one.
 
4. Why Onboarding — Strategic Justification
This section answers a question that the rest of the report assumes: of all the things we could have built for PicApp, why did we choose onboarding? The activation gap is real, but it could in principle be addressed by several different solutions. A reasonable team could have proposed redesigning the home screen, building an AI-powered chatbot, adding gamification, sending re-engagement notifications, or running marketing experiments. We chose onboarding deliberately, and this section sets out the evidence behind that choice.
4.1  Onboarding is the Highest-Leverage Moment in Any Mobile App
Mobile app retention follows a remarkably consistent shape across categories. Localytics' multi-year benchmark study of millions of mobile app users found that 21% of users abandon an app after a single use, and that this number has remained stable across the past decade. Quettra's analysis of more than 125 million app sessions extended this finding: the average mobile app loses 77% of its daily active users within the first three days, and 90% within thirty days. The pattern is not specific to any vertical — it appears in retail, health, finance, travel, and social apps alike.
The mechanism behind these numbers is well understood. Nielsen Norman Group's research on first-use experience identifies the first session as the moment when users form a near-permanent judgement about whether an app is worth their attention. A user who experiences confusion in the first session does not give the app a second chance — they delete it, or simply never open it again. Andrew Chen, formerly of Uber and now at Andreessen Horowitz, summarises the consensus position with a phrase widely cited in product management circles: "the leakiest part of any funnel is the top." Investments made before users experience value yield more retained users than investments made later, by a wide margin.
This means that for any product exhibiting the activation conditions PicApp has, onboarding is mathematically the highest-impact intervention available. A 10% improvement in onboarding completion compounds across every downstream metric — first booking, second booking, retention, referral. A 10% improvement in any later-stage feature only affects the small minority of users who survive long enough to reach it.
4.2  Onboarding Directly Addresses the Activation Problem, Not Adjacent Problems
Product growth literature distinguishes between three categories of user problem: acquisition (getting users to sign up), activation (getting users to experience value), and retention (getting users to come back). Each category requires a different intervention, and applying the wrong intervention is a common cause of wasted effort.
PicApp's documented problem is unambiguously an activation problem. Users sign up successfully — acquisition is working. They simply do not reach value before leaving. Reichheld's research on customer loyalty, repeatedly validated in digital contexts, shows that retention interventions (push notifications, email re-engagement, loyalty rewards) only work on users who have already experienced value. Sending a re-engagement push to a user who never understood the app produces no behaviour change because there is no positive memory to reactivate.
Onboarding is the intervention category specifically designed for activation problems. Choosing it is therefore not a stylistic preference but a structural match between problem and solution.
4.3  Onboarding Has the Strongest Evidence Base for Activation Lift
The empirical case for structured onboarding is unusually strong relative to most UX interventions. The following findings come from large-scale industry studies and meta-analyses published between 2023 and 2025:
•	Appcues (2025) — a study of more than 1,000 product-led companies — reports that products with structured onboarding experiences see an average 50% lift in activation rate compared to products that drop users into the interface unaided.
•	UXCam (2025) — analysing mobile app behavioural data — found that users who complete onboarding have 2 to 4 times higher Day-7 retention than users who skip or never encounter it.
•	Mixpanel (2024) — Product Benchmarks Report — identifies short, well-paced onboarding flows of three to six steps as having the highest completion rates, in the 60–70% range.
•	WalkMe (2023) — enterprise onboarding effectiveness study — found that personalised, role-aware onboarding flows reduce time-to-first-value by 35–45% compared to generic flows.
Crucially, these gains do not require any change to the underlying product. They are produced entirely by changing the first-session experience. For a platform like PicApp where the product itself works, this is a near-ideal match: maximum impact, minimum disruption to existing systems.
4.4  Onboarding Builds the Foundation Other Solutions Need
There is a sequencing argument as well as a magnitude argument. Most other improvements PicApp could make depend on onboarding being in place first.
A redesigned home screen, however polished, only helps users who reach the home screen with an understanding of what they are looking at. A chatbot, however sophisticated, only helps users who know enough to ask a useful question. A loyalty programme only rewards behaviour from users who have understood the loyalty mechanic. Onboarding is the precondition that makes other investments effective. Building it first is not just one option among several — it is the prerequisite step that determines whether subsequent investments produce returns.
4.5  Comparison with the Realistic Alternatives
To make the choice fully transparent, we evaluated onboarding against the three most plausible alternative interventions: a redesigned home screen, an AI-powered chatbot, and gamification or rewards. Each was assessed on five criteria: directness of fit to the activation problem, evidence base, implementation cost at PicApp's current scale, dependency on user data, and required time to first impact.
Criterion	Onboarding Journey	Home Screen Redesign	AI Chatbot	Gamification / Rewards
Direct fit to activation problem	Direct — designed for activation	Indirect — helps users who already know what the app is	Indirect — only helps users who know what to ask	Indirect — rewards behaviour, does not teach value
Evidence base	Strong (Appcues, UXCam, Mixpanel, WalkMe)	Mixed — depends entirely on what is redesigned	Weak for first-session activation; chatbots help support, not onboarding	Mixed — works for habit-forming products, less for utility apps
Implementation cost (150 users)	Low — six Vue components, no infrastructure	Medium — full visual and interaction overhaul	High — content authoring + escalation pipeline + ongoing maintenance	Medium — reward economy design + balance tuning
Data dependency	None — works at day one	Some — best decisions require usage analytics	High — quality answers depend on training or query corpora	High — needs behavioural data to design meaningful rewards
Time to first measurable impact	Immediate — first user who completes the flow	Weeks — A/B testing required to validate	Months — content tuning + escalation tuning	Months — habit loops take time to form

4.6  Why Each Alternative Was De-Prioritised
Home Screen Redesign
A better home screen helps users who already understand the product. It does not help users who do not yet understand what the product is or how to use it. PicApp's documented loss point is the moment of first arrival, before the home screen has a chance to communicate anything useful. Redesigning the home screen is a worthwhile second-phase project — and we recommend it explicitly in the roadmap — but it is the wrong first move. It also fails the data-independence test: the strongest home screen redesigns are informed by usage analytics that PicApp does not yet have.
AI Chatbot
Chatbots are a support tool, not an activation tool. The empirical literature on chatbots in mobile apps consistently finds that they help users who are already engaged and have specific questions, but new users in the first 60 seconds rarely have a formulated question — they have confusion, which is a different state. Asking a confused user to articulate their confusion to a chatbot adds friction rather than removing it. A chatbot also requires a maintained content corpus, escalation paths, and ongoing content management, which is a significant operational commitment for a 150-user platform. We retained AI-assisted help in the prototype as a secondary feature for future development, not as a primary intervention.
Gamification and Rewards
Gamification works well for habit-formation in products users have already adopted — Duolingo's streaks are the canonical example. It does not solve activation. A user who has not yet experienced PicApp's value will not be motivated by a streak counter for an activity they have not yet performed. Gamification also depends on behavioural data to design rewards that meaningfully reinforce the right actions, and PicApp does not have that data.
4.7  Summary of the Strategic Argument
Onboarding was chosen over the alternatives for four reinforcing reasons:
•	Mathematical leverage — the top of the funnel is where the largest gains exist for any product exhibiting the activation conditions PicApp has.
•	Problem-solution fit — onboarding is the intervention category specifically designed for activation problems, which is what PicApp has.
•	Evidence base — the published lift from structured onboarding is the largest and best-documented of any UX intervention category.
•	Sequencing — onboarding is the precondition that makes home-screen, chatbot, and reward investments effective. Building it first is not just one valid choice; it is the choice that makes future choices viable.
This combination — high impact, low cost, strong evidence, and structural priority — is unusually rare in product design. When it does appear, the answer is to take it. That is the case we made to the client at the 12 March meeting, and it is the case our work has executed against.
 
5. Theoretical Foundation
Two psychological frameworks shape every design decision in the onboarding journey. They are not used as decoration — they are the active reasoning behind why each stop exists, why it appears in its specific position, and why it presents information the way it does.
5.1  Self-Determination Theory (Deci & Ryan, 1985)
Self-Determination Theory is one of the most empirically validated frameworks in motivational psychology. It states that sustained human motivation depends on satisfying three basic psychological needs: autonomy, competence, and relatedness. When these needs are met, people engage willingly and persist with the activity. When they are frustrated, people disengage — even if the activity itself is interesting or beneficial.
For an onboarding flow, this theory has direct, concrete implications:
Autonomy — the need to feel in control of one's own actions
Users who feel pushed through a tutorial resent the product before they have used it. Our journey supports autonomy by including a visible Skip button on every overview step, an explicit Close option on every detail screen, a Previous button to return to earlier stops, and a free choice between Driver, Passenger, or Both at the role stop. The user is always in control of the depth and pace of their journey.
Competence — the need to feel capable and effective
Confused users do not return. Our journey supports competence by surfacing exactly one teaching topic per stop, never overlapping concepts, and using a numbered six-stop progress structure so users can always see how much they have completed and how much remains. The detailed explanation on each stop is layered behind a Details tap so the user can self-select the depth of information they want, building a sense of mastery rather than overwhelm.
Relatedness — the need to feel connected to others
Carpooling with a stranger is fundamentally a trust problem, and trust is built through perceived shared context. Our journey supports relatedness in two distinct ways: the Stop 1 framing emphasises that PicApp is event-based — drivers and passengers are going to the same concert, the same match, the same festival — which transforms a stranger into someone with the same plan. The Stop 3 safety content reinforces the social contract through verified identity, mutual reviews, and 24/7 support, signalling that the platform itself stands behind every interaction.
5.2  The Zeigarnik Effect (1927)
Bluma Zeigarnik's foundational research demonstrated that people remember and return to uncompleted tasks more reliably than completed ones. The brain treats incompleteness as an open loop demanding closure — a tension that persists until the task is finished. This effect is the reason episodic television uses cliffhangers, the reason progress bars increase task completion, and the reason a list with one remaining checkbox feels different from a list with all checkboxes ticked.
Our onboarding journey applies the Zeigarnik effect through its central visual metaphor: a winding road on which a small green car travels from stop to stop. Six numbered dots at the bottom of the screen show progress, and the road extends visibly beyond the user's current position. The unfinished road is a constant, peripheral reminder that the journey is not complete. This is far more motivating than a numerical "step 1 of 5" label, because it exploits the same psychological mechanism that makes people finish a meal they no longer want or read the last chapter of a mediocre book.
The Finish stop closes the loop deliberately and visibly. The user reaches the end of the road, sees a setup-complete confirmation, and is then handed off to the live application with a "Start exploring" call to action. The closure is the reward.
5.3  Why These Two Theories Together
SDT and the Zeigarnik effect operate on different timescales and address different needs. SDT explains why a user wants to engage with each individual stop — because their psychological needs are being met. The Zeigarnik effect explains why the user moves from one stop to the next — because the visual incompleteness of the journey creates a forward pull. Together they form the motivational architecture: SDT keeps the user engaged at each step; Zeigarnik keeps them moving toward the next.
 
6. Research & Methodology
6.1  Approach
We followed a structured four-phase approach spanning the project timeline from 15 February to late April 2026.
Phase	Timeframe	Key Activities
1. Discovery	15 Feb – 26 Feb	Client kickoff, briefing review, team agreement, first ideation round.
2. Analysis	27 Feb – 12 Mar	Stakeholder mapping, problem definition, competitor research, client re-alignment meeting confirming onboarding as the focus.
3. Design	12 Mar – 9 Apr	Theoretical grounding (SDT and Zeigarnik), six-stop journey design, content writing for each stop, visual road metaphor.
4. Build & Deliver	9 Apr – April 2026	Prototype implementation, iteration based on team review, final report, presentation prep for Bruges week.
6.2  Client Engagement
•	15 February — Kickoff: initial briefing, project scope confirmation.
•	12 March — Idea review: among five candidate ideas (driver profiles, city competition, live map, integrated add-on, invite-and-earn), the client identified guided onboarding as his clear preference, stating that matching and ride prediction were already working or out of scope.
•	Ongoing — Asynchronous feedback via email, primarily handled by Felicia.
6.3  Research Inputs
•	Behavioural psychology: Self-Determination Theory (Deci & Ryan, 1985) and the Zeigarnik effect (1927) as primary frameworks.
•	Sustained motivation review: "Designing for Sustained Motivation — A Review of Self-Determination Theory in Behaviour Change Technologies" (provided in project knowledge), which catalogues SDT-informed design features applicable to digital products.
•	Competitor analysis: onboarding flows of BlaBlaCar, GoMore, Uber, and Lyft, focusing on how each handles the first 60 seconds.
•	Local context (Sweden): high digital trust environment with near-universal BankID and Swish adoption, supporting our trust-forward Stop 3 design.
•	Industry benchmarks: Appcues, Mixpanel, and UXCam published 2024–2025 onboarding completion and retention data.
 
7. The Onboarding Journey — Core Solution
7.1  Visual Metaphor
The onboarding journey is structured as a road trip. A small green car travels along a winding green road, stopping at six labelled points. Five of these points are teaching stops; the sixth is a recap and handoff. Each stop is presented as a card next to the road, with a Skip option in the top-right and a Continue button at the bottom. Six dots at the foot of the screen reinforce progress.
The metaphor is not decorative. It does three jobs simultaneously. First, it makes progress visible without resorting to a sterile percentage bar — the car physically moves forward. Second, it gives the user a peripheral cue of how much remains, supporting the Zeigarnik effect. Third, it ties the experience emotionally to PicApp's product itself: a journey, taken together, with a clear destination.
7.2  The Six Stops
Stop	Title	What the User Learns
1	What is PicApp?	PicApp is event-based ride-sharing. Share rides to concerts, sports, and festivals — save money, meet people, and help the planet.
2	How it works	Three steps: post or search a trip → PicApp matches you → confirm and go. The mechanic is demystified up front.
3	Safety and trust	ID checks, digital agreements, mutual reviews after every trip, and 24/7 support. The trust contract is made explicit.
4	Pricing	Full price shown up front, no surprises at checkout, secure in-app payment with card details kept private from drivers.
5	Your role	Choose Driver, Passenger, or Both. The choice is changeable later in Settings — low-stakes commitment.
Finish	Ready to ride	Setup-complete recap reinforcing all five learning stops. Closes the Zeigarnik loop and hands the user off to the app with a "Start exploring" call to action.

7.3  Design Philosophy
Three design principles guided every choice in the journey:
•	Empower, do not teach. Each stop delivers exactly one idea. Detailed explanations are layered behind an optional Details tap so users self-select their depth of engagement. This respects autonomy and prevents cognitive overload.
•	Show progress, do not announce it. The car moving along the road is felt rather than read. A six-dot indicator at the bottom confirms position without making the user count steps.
•	End decisively. The Finish stop is not optional. It exists because closure is a reward — the explicit completion of the journey delivers the satisfaction the Zeigarnik effect builds throughout.
 
8. Justification of Each Stop
This section is the heart of the report. For every stop, we explain not only what it is, but why it exists in its specific position, why its content is structured the way it is, and which theoretical principle it is satisfying.
Stop 1 — What is PicApp?
Position rationale:
This is the first stop because the very first thing a new user needs to know is what they have just signed up for. Without a clear identity statement, every subsequent piece of information lacks an anchor.
Content rationale:
The stop opens with a single sentence — "Share rides to concerts, sports, and festivals you love" — followed by the three benefits framed as money, meeting people, and helping the planet. These three benefits are not arbitrary. Each maps to a different motivational driver: economic (extrinsic), social (relatedness), and ethical (intrinsic). By presenting all three immediately, the journey speaks to the widest possible spectrum of new-user motivations within the first ten seconds.
Theoretical justification:
This stop is primarily about relatedness. The event-based framing — concerts, sports, festivals — is the platform's distinctive social context. It immediately signals that PicApp is not a generic carpooling app where you ride with random strangers; it is a platform where every ride begins with a shared interest. This shared interest is the foundation on which trust will later be built.
Stop 2 — How it works
Position rationale:
Once the user understands what PicApp is, the immediate next question is how it works. Mechanics come second because identity comes first. Reversing this order — explaining the mechanic before the concept — is a common onboarding mistake that leaves users with a working knowledge of features but no understanding of why they would use them.
Content rationale:
The mechanic is reduced to three numbered actions: post or search a trip, get matched, confirm and go. Three steps is deliberate — research on procedural learning consistently shows that three is the upper limit for what people remember from a single exposure. A four- or five-step explanation would be technically more accurate but functionally less useful.
Theoretical justification:
This stop is primarily about competence. By presenting the entire mechanic in three retainable steps, the journey gives the user the feeling that the platform is graspable. They do not need to study a manual; they already know how it works. This perceived simplicity is itself a motivator.
Stop 3 — Safety and trust
Position rationale:
Safety appears at the midpoint of the journey for a precise reason: trust questions become acute exactly when a user is about to consider acting. Placing safety after identity and mechanics, but before pricing and role selection, intercepts hesitation at the moment it would otherwise emerge unprompted.
Content rationale:
Three safety pillars are presented: identity verification (ID checks and digital agreements), mutual accountability (drivers and passengers rate each other after every trip), and platform backup (24/7 support if anything goes wrong). The order is deliberate — it moves from prevention, to peer accountability, to escalation. Each pillar addresses a different fear: "who is this person?", "what stops them from behaving badly?", and "what happens if something does go wrong?"
Theoretical justification:
This stop directly serves relatedness in its strongest form: institutional trust. Carpooling with a stranger is a fundamentally vulnerable act, and SDT's relatedness need cannot be satisfied if the user does not feel safe. By making the trust contract explicit and concrete — not just "we're safe" but specifically how — the journey gives the user permission to engage.
Stop 4 — Pricing
Position rationale:
Pricing comes after safety because trust is a precondition for the user to even care about price. A user who does not yet trust the platform will not engage with cost information; they will simply leave. With trust established at Stop 3, the user is now psychologically ready to evaluate value.
Content rationale:
The pricing stop emphasises three things: the price is shown up front, there are no surprises at checkout, and payment is secure with card details kept private from the driver. These three messages are designed to neutralise the three classic anxieties around peer-to-peer payments: hidden costs, surprise fees, and exposure of payment information to strangers.
Theoretical justification:
This stop serves competence and autonomy in combination. Knowing the price up front gives the user complete information to decide for themselves whether the value works for them — that is autonomy. Knowing that there are no surprises gives them confidence in their decision — that is competence. The user is being equipped to make a real choice, not nudged into one.
Stop 5 — Your role
Position rationale:
Role selection deliberately appears at Stop 5 — near the end of the journey — rather than at the beginning. This is a non-obvious choice and worth justifying explicitly.
An earlier version of our design had persona selection at Step 1, on the assumption that branching the experience early would yield more relevant content for each user. The team revised this position based on a clearer reading of the user's psychological state. At Step 1, a brand-new user does not yet know enough about the platform to make an informed role choice. They have not learned what driving on PicApp involves, what passengers experience, what safety means, or how pricing works. Asking them to commit to an identity at that moment forces a decision under conditions of ignorance.
By moving role selection to Stop 5, the journey ensures the user makes their choice with full context. They have already understood the concept, the mechanic, the safety net, and the cost. The role selection is now a meaningful decision rather than a guess.
Content rationale:
Three options are offered — Driver, Passenger, or Both — and each is described in one user-facing sentence ("I will offer rides and earn money for fuel" / "I am looking for affordable rides to events"). The platform also explicitly states: "You can always change this later in Settings." This phrase is critical.
Theoretical justification:
This is the strongest autonomy moment in the journey. The user is making a real choice about how they will use the platform, with full information, and with a low-stakes escape hatch — they can change their mind. SDT research is unambiguous: choices made under conditions of perceived autonomy produce dramatically higher follow-through than choices that feel forced. Moving this decision to the end of the journey, rather than the beginning, is therefore not a delay; it is a deliberate act of design intelligence.
Finish — Ready to ride
Position rationale:
The Finish stop is not optional and not skippable. It is the moment the Zeigarnik loop closes.
Content rationale:
The screen leads with "Setup complete — You are all set" and recaps the five learning topics in a compact list: event-based rides, knowing how it works, transparency, verified people, and the chosen role. The recap is brief and reinforcing — it does not teach anything new, it consolidates what has already been taught.
The closing call to action is "Start exploring" — phrased as an invitation rather than a command. The user is then handed off to the live application.
Theoretical justification:
Closure is a reward. The Zeigarnik effect builds tension throughout the journey by leaving the road visibly unfinished; the Finish stop releases that tension explicitly, giving the user the satisfaction of completion. Without this stop, the journey would feel like it had simply trailed off — a far less motivating experience than reaching a clearly marked destination.
 
9. Secondary Features (Home Screen & AI Help)
The prototype includes two additional components beyond the onboarding journey: a refreshed home screen and a contextual AI-assisted help surface. These are intentionally treated as secondary in this report. They exist to demonstrate the post-onboarding context and to show how the journey integrates with the live application, but they are not the focus of our contribution and they are not the basis on which our work should be evaluated.
9.1  Home Screen
After the user finishes the onboarding journey, they are handed off to the home screen. The current prototype version shows a clean entry surface with event-based ride cards including social proof signals (number of attendees going to each event, driver verification, seat availability).
This screen is included to validate that the journey terminates cleanly into a meaningful interface, not into a confusing wall of options. However, the home screen is not the central design contribution of this project. PicApp already has a home screen; ours is a sketch of where the journey could lead, not a final replacement design. Further refinement of the home screen is recommended for a subsequent project phase, where it could be redesigned in dedicated detail.
9.2  AI-Assisted Help
A small chat surface is accessible from within the app, allowing the user to ask context-aware questions. In the prototype it connects to a live AI service for demonstration purposes.
This is a secondary feature for two reasons. First, it solves a problem (in-app help) that is distinct from the onboarding problem, which is our project's stated focus. Second, at PicApp's current scale of 150 users, a rule-based FAQ component is the more appropriate first deployment — the AI version shown in the prototype is a future-state demonstration, not a launch recommendation.
If PicApp wishes to invest further in this direction in a later project phase, the AI-assisted help could be developed into a fully contextual support layer that complements the onboarding journey. For now, it is included to show the integration possibility, not as part of the core deliverable.
 
10. Prototype Implementation
10.1  Technology Choice
The prototype is implemented as a React JSX artifact. This is not the technology PicApp will use in production — PicApp runs on Vue 3, and the production implementation will follow its existing stack. React was chosen for the prototype specifically because the AI-assisted help component requires live API calls to a remote service, and the React artifact environment supports cross-origin calls in a way that simple HTML files cannot.
The translation to Vue 3 is straightforward. Each onboarding stop maps cleanly to a Vue component. The journey state (current stop, completion flag) maps to a small Pinia or Vuex store. Whether the user has completed onboarding is tracked with a single boolean flag in their user record. No new infrastructure is required.
10.2  Key Features
•	Complete six-stop onboarding journey with the road metaphor visualisation.
•	Skip option on every overview step; Close, Previous, and Next stop controls on every detail screen.
•	Six-dot progress indicator at the foot of the screen.
•	Detail screens showing scrollable content per stop, with two-line description plus expanded explanation cards.
•	Finish stop with full recap and "Start exploring" handoff.
•	Post-onboarding home screen with event ride cards (secondary feature).
•	AI-assisted help surface (secondary feature, demonstration only).
•	All monetary values in Swedish kronor (SEK), matching PicApp's market context.
10.3  Limitations of the Prototype
•	No real authentication — the journey state is entirely client-side.
•	Event and driver data on the home screen are simulated.
•	AI help connects to a live API for the demo; production deployment would use a rule-based component as the first launch step.
•	No telemetry — the event tracking specified in our recommendations would be implemented by PicApp's developers in production.
 
11. Feasibility Analysis
Factor	Assessment	Status
Client approval	Onboarding focus confirmed at the 12 March client meeting.	Confirmed
Theoretical grounding	Every design choice traces directly to SDT or the Zeigarnik effect, both established frameworks.	Strong
Tech stack fit	Six stops translate directly into Vue components. No new infrastructure needed.	Realistic
Data dependency	Journey works at 150 users with no behavioural data required.	Independent
Deliverable format	Interactive prototype agreed as acceptable output.	In scope
Timeline	Full journey designed, justified, and built within the project deadline.	On track
Problem alignment	Each stop maps to one identified root cause of the activation gap.	Direct
Production code	Out of scope. Prototype is the deliverable; PicApp's developers will implement.	Noted

Overall conclusion:
The onboarding journey is fully feasible within the scope of this project. It directly addresses the activation gap, is grounded in established psychological theory, requires no new infrastructure, and is implementable in PicApp's existing Vue 3 stack the week after our presentation.
 
12. Expected Impact
PicApp has no existing telemetry, which means the current state of these metrics is genuinely unknown. The projections in this section are not measured baselines — they are reference points drawn from published industry benchmarks (Appcues 2025, Mixpanel 2024, UXCam 2025, WalkMe 2023) for apps with similar conditions to PicApp. They describe what we reasonably expect once the onboarding journey is in place and instrumented from day one. They are explicitly framed as expectations, not guarantees, and they will only become measurable claims once PicApp begins collecting behavioural data.
Metric	Current State	Expected After Journey	Basis
First-session abandonment rate	Not measured. Industry benchmark for apps with PicApp's conditions: 70–90%.	Reduction of 30–50% relative to baseline once measured	Personalised onboarding flows reduce early drop-off by 30–50% (Appcues 2025)
Journey completion rate	Not applicable — no journey currently exists	Expectation: 60–70% completion	Industry average for short, well-paced onboarding flows (Mixpanel 2024)
Time to first booking	Not measured	Expectation: within first session for a meaningful share of users	Trust-forward onboarding accelerates first-action conversion (WalkMe 2023)
Day-7 retention	Not measured. Industry baseline for apps without onboarding: typically below 10%.	Expectation: 2–4x relative lift once measured	Structured onboarding lifts Day-7 retention 2–4x (UXCam 2025)
Role selection rate	Not applicable	Expectation: above 80% completion at Stop 5	Late-position role selection has higher commitment than early-position

Important caveat:
These are expectations, not predictions. Three conditions must hold for them to be realised. First, the onboarding journey must be implemented in full — all six stops, the road metaphor, and the Finish recap. Partial implementation will produce proportionally lower results. Second, PicApp must instrument the journey from day one. Without telemetry, neither the current baseline nor the lift can be measured. Third, the underlying app must continue to function reliably, since onboarding cannot rescue a broken core product. With these three conditions met, the published research base gives us strong directional confidence in the projections shown.
 
13. Recommendations for PicApp
13.1  Phase 1 — Launch the Journey (Immediate)
•	Implement the six-stop onboarding journey in Vue 3, including the road metaphor and the Finish recap.
•	Add a per-user completion flag in the database so the journey is shown exactly once.
•	Instrument from day one: log which stop each user reaches, completes, or drops off on, and whether they used Skip or Previous.
•	Save the role selection (Driver / Passenger / Both) to the user profile so the live app can adapt accordingly.
13.2  Phase 2 — Learn (3–6 months)
•	Review drop-off telemetry to identify the weakest stop and A/B test alternative copy or visuals.
•	Test variations of the role selection screen — for example, defaulting to Both versus offering the three options equally.
•	Survey users who dropped off to understand which stop lost them.
13.3  Phase 3 — Extend (6–12 months)
•	Develop the home screen as a focused project of its own, building on the post-onboarding context the journey establishes.
•	Replace any existing rule-based help component with an AI-assisted version once enough query data exists to ground it usefully.
•	Consider integrating BankID for sign-up and Swish for payments to leverage Sweden's universal trust and payment infrastructure.
•	Introduce a sustainability impact display (kg CO₂ saved per shared ride) building on the planet message from Stop 1.
13.4  Out of Scope but Worth Noting
•	AI-powered route or ride matching is a potential future feature but is not recommended until there is enough behavioural data to support it meaningfully.
•	Live event maps, city competitions, and invite-and-earn schemes were considered early and de-prioritised. They could become useful once the onboarding foundation is solid.
 
14. Final Presentation Outline
The following outline structures the final presentation delivered during the physical BIP week in Bruges. Timing is indicative for a 14-minute talk plus Q&A.
#	Slide	Content & Purpose
1	Cover & Team	Title, team members, institutions. 30 seconds.
2	The Hook	PicApp has no onboarding. Industry research shows apps in this condition typically lose the majority of users in the first session. Frame this as the gap we are closing. 1 minute.
3	Client & Brief	PicApp context and the client's own words. 1 minute.
4	Five Unanswered Questions	Reframe the activation gap as five specific questions a new user faces. 1.5 minutes.
5	Theoretical Foundation	SDT and Zeigarnik. Why two theories together. 1.5 minutes.
6	Solution: The Journey	The road metaphor and six-stop overview. 1 minute.
7	Stop-by-Stop Walkthrough	Each stop and the reasoning behind it. Emphasise role selection at Stop 5. 2.5 minutes.
8	Live Prototype Demo	Run through the actual journey. The car moves. The road completes. 3 minutes.
9	Feasibility & Impact	Feasibility table + expected impact projections. 1 minute.
10	Roadmap	Three phases — Launch, Learn, Extend. 1 minute.
11	Closing	Recap of the core message. Thanks. Questions. 1 minute.

Presentation delivery notes:
•	Each team member presents at least one section to reflect the international, collaborative nature of the project.
•	Live demo carries the most impact — rehearse the click path twice so it never stalls.
•	Keep slides visual: minimal text, one key message per slide.
 
15. Conclusion
PicApp has a working product and a small but genuine user base. What it lacks is a structured first experience — a journey from sign-up to first value. The activation gap is not a single failure but the combined effect of five unanswered questions a new user faces when they open the app for the first time: what is this, how does it work, is it safe, what does it cost, and what is my role? The platform does not currently measure how many users this gap loses, but its slow organic growth is consistent with the pattern industry research describes for apps in PicApp's condition.
Our project addresses each of these questions in sequence through a six-stop onboarding journey, designed as a road metaphor with a moving car and grounded in two complementary theoretical frameworks. Self-Determination Theory shapes how each stop satisfies the user's needs for autonomy, competence, and relatedness. The Zeigarnik effect shapes the visual structure that pulls the user from one stop to the next. Together they form the motivational architecture of the solution.
The journey requires no new infrastructure, no behavioural data, and no waiting. It is implementable in PicApp's existing Vue 3 stack the week after our presentation. The home screen and AI-assisted help components in the prototype are present as secondary features and may be developed further in a subsequent project phase, but they are not the focus of this contribution.
The central insight is simple: PicApp does not need more features. It needs a better first experience — and a journey, taken together, with a clear destination, is the right shape for that.
We thank Per Anders Hovbom for the open brief and clear feedback at each milestone, Jan Willem Crabbendam for coaching through the process, and the BIP 2026 programme for making a genuinely international student collaboration possible.
16. References & Appendices
16.1  Internal Project Documents
•	PicApp_BIP2026.docx — Project plan, problem definition, stakeholder analysis, requirements.
•	Improving_App_Onboarding_and_User_Experience.docx — Extended research synthesis.
•	PicApp_Final.jsx — Final interactive prototype.
•	PICAPP_20251113_Pres_HB_ENG.pdf — Client-provided product briefing.
•	BIP_Kickoff_day_05022026_pptx.pdf — Programme kickoff deck.
•	Designing_for_Sustained_Motivation.pdf — Academic reference applying SDT to behaviour change technologies.
16.2  External References
•	Deci, E. L., & Ryan, R. M. (1985). Intrinsic Motivation and Self-Determination in Human Behavior. Springer. The foundational source of Self-Determination Theory.
•	Zeigarnik, B. (1927). On Finished and Unfinished Tasks. The foundational research on task-completion memory effects.
•	Reichheld, F. F. (2003). The One Number You Need to Grow. Harvard Business Review. Foundational research on customer loyalty and retention mechanics.
•	Nielsen Norman Group. First-Use Experience research articles. nngroup.com — first-session judgement formation in app usage.
•	Localytics. Mobile App Retention Benchmark Report — single-session abandonment data across mobile categories.
•	Quettra. Mobile Growth Stack — analysis of 125 million app sessions on three-day and thirty-day retention curves.
•	Chen, A. The Power User Curve and other writings on user activation and retention. andrewchen.com.
•	Appcues (2025). The State of Product-Led Onboarding — drop-off rate and personalisation lift benchmarks.
•	Mixpanel (2024). Product Benchmarks Report — onboarding completion rate norms.
•	UXCam (2025). Mobile App Conversion Rate Benchmarks — Day-7 retention data.
•	WalkMe (2023). Digital Adoption and Onboarding Effectiveness Study — time-to-value reductions from personalised onboarding.
•	BankID adoption statistics (Sweden) — finansinspektionen.se / bankid.com public reports.
•	Swish usage (Sweden) — Swedish Bankers Association reports.
16.3  Contact
•	Client — Per Anders Hovbom, PicApp Sweden AB.
•	Coach — Jan Willem Crabbendam, Hogeschool Inholland (janwillem.crabbendam@inholland.nl).
•	Group 1 liaison — Felicia (Borås).
