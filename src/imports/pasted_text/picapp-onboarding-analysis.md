When we started the project with PicApp, we were given a very open brief: “you can do whatever you want” This gave us a lot of freedom, but also a challenge. The lack of clear requirements meant that our initial phase became quite scattered, as we explored many different ideas without a clear direction.
Already in our first meeting with the client, we tried to structure this openness by asking concrete questions to understand their real needs and priorities. Some of the most important questions we asked were:
If we only solve one problem for you in this project, what would create the most value for PicApp?
The answer was clear: to get as many users as possible to join the app and use it daily.
At what stage do users drop off? Onboarding, finding a ride, booking, or returning to the platform?
Here we learned that there was no user data yet, and that future testing would be done with volunteers.
What specific user behaviour would you like to change or increase?
Examples included getting more users to publish rides, book their first ride, and return after their first experience.
At the same time, we learned that saving money is the biggest driver for users, while the social aspect is a secondary benefit.
These answers gave us some direction, but at the same time, the lack of concrete data meant that we had to interpret and analyse the problem ourselves.
Based on this, we conducted an initial analysis of the system and identified key challenges related to user behaviour and low activity on the platform. We also identified that this affects several stakeholders:
New users, who do not engage with the system
Existing users, who are affected by low activity
PicApp, which experiences low conversion and retention
Despite this, we started with a classic ideation phase where we generated several different solution concepts. Many of our early ideas focused on creating new features, such as advanced matching systems, predictive solutions for event-based rides, and various social features. In hindsight, we can see that these ideas were closer to what innovation theory describes as radical or future-oriented innovation, where the focus is on new technological possibilities rather than the current user experience.
However, the problem was that these ideas required data that was not yet available in the system, and according to the client, they were more relevant for future development. This created a clear gap between what we could imagine building and what was actually feasible and valuable in the present.
This led to an important turning point in the project – a kind of “crisis meeting.” During this meeting, we decided to take a step back and conduct a deeper analysis of the system and the problem. Instead of continuing to generate new ideas, we focused on understanding the user’s actual experience of the system.
(Maybe more about the analysis we did here? From the to do tab)

Onboarding was chosen over the alternatives for four reinforcing reasons:
•         Mathematical leverage — the top of the funnel is where the largest gains exist for any product exhibiting the activation conditions PicApp has.
•         Problem-solution fit — onboarding is the intervention category specifically designed for activation problems, which is what PicApp has.
•         Evidence base — the published lift from structured onboarding is the largest and best-documented of any UX intervention category.
•         Sequencing — onboarding is the precondition that makes home-screen, chatbot, and reward investments effective. Building it first is not just one valid choice; it is the choice that makes future choices viable.
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

 

It was in this deeper analysis that we identified the core problem:
 PicApp has functionality for planning and booking rides, but lacks onboarding, which creates a gap between system functionality and user understanding. New users are presented with multiple features at once without guidance, leading to uncertainty, cognitive overload, and in many cases, users leaving the app before completing any meaningful action.
After this insight, our process changed significantly and can be described in four steps: first a broad ideation phase, then a crisis where our ideas did not hold, followed by a shift where we returned to the problem and started working more iteratively, and finally a solution phase where we landed on onboarding.
In this shift, we began working more iteratively, which can be linked to both design thinking and fast prototyping. Instead of trying to build large solutions immediately, we worked in cycles of idea → prototype → feedback → iteration. This allowed us to test our assumptions quickly and continuously receive input from the client.
The key insight came when we returned to the user’s first interaction with the system. We realized that the problem was not a lack of functionality, but that users do not understand how to use the system.
This can be linked to Diffusion of Innovation (DoI), where the knowledge stage is critical. For an innovation to spread, users must understand how it works and how to use it. In PicApp’s case, this understanding was missing, as onboarding essentially did not exist.
This was where our direction changed. Instead of creating new features, we focused on enabling users to actually use what already exists. Our solution therefore became an onboarding process that both explains the system and actively helps users take the first step - booking or creating a ride.
We chose this solution because it addresses a clearly identified problem, does not require new data, is feasible within the scope of the project, and directly impacts the user behaviour the client wants to change. Unlike our earlier ideas, onboarding creates value here and now, which made it the most relevant choice.
Once we had decided on onboarding as our solution, we developed two different prototypes. One was more traditional, while the other was more interactive and unconventional. We presented both to the client, who appreciated both approaches and suggested that we combine them. This became the foundation for our final solution.
In our prototype, we chose to use the same colours and visual style as PicApp to create familiarity and trust. At the same time, we introduced interactive elements, such as a moving car throughout the onboarding flow. The purpose of this was to break the common behaviour where users quickly click through onboarding without engaging with the content, and instead create curiosity and encourage users to pay attention to what is happening.
(More theory/arguments about our design choices here?)
From an innovation perspective, this means that we moved from more radical ideas to an incremental innovation, where we improve an existing solution to create real value.
At the same time, our way of working evolved throughout the project. As an international team, we experienced both strengths and challenges in our collaboration. What worked well was that we had strong communication, an open idea process, and that everyone took responsibility for their tasks. Our different backgrounds also contributed to multiple perspectives and better solutions.
However, there were also challenges. The open brief initially made it difficult to find direction, we spent time on ideas that were not feasible, and differences in working styles sometimes created uncertainty. We also realized that we should have validated our ideas with the client earlier in the process.
These challenges, however, led to important learnings and helped us improve both our process and our final solution.
In conclusion, our journey moved from a broad and technology-focused ideation phase, through a critical turning point, to a more user-centered and realistic solution. The most important thing we learned is that innovation is not always about creating something new – sometimes it is about making what already exists understandable, usable, and valuable for the user.

