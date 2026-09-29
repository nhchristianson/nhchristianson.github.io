---
layout: course
permalink: /teaching/601-734/project/
title: Course project
description: Project information for EN.601.734
course_section: project
nav: false
---

# Course project

Students will complete a semester-long research project related to machine learning-augmented algorithm design. Projects should involve both theoretical and empirical results—for example, developing a new algorithm or improving an existing algorithm, proving theoretical guarantees about its performance, and evaluating it experimentally.

## Project format

Projects will be conducted in groups of **1–3**; you should discuss with your classmates early on to find topics of common interest and form project groups. Project scope and depth should scale with group size; two-person groups will be expected to demonstrate a broader or more technically deep contribution than solo projects. Please attend office hours or schedule a meeting with the instructor if you need project topic suggestions. The ideal project will yield a short paper of quality comparable to a workshop paper at, e.g., NeurIPS; projects should be scoped accordingly.

Project deliverables include:

- **Project proposal:** An initial 1–2-page write-up detailing the project topic, motivation, related work, and initial project plan. Groups are **highly** encouraged to meet with the instructor before the proposal deadline to ensure the topic is well scoped.
- **Mid-semester project update presentation:** A 5–10-minute presentation giving an overview of the project topic, progress so far, and planned next steps.
- **Final project presentation:** A 15–20-minute presentation describing the final project results.
- **Final project write-up:** A written report detailing the project results and all relevant background and related work. This can reuse and revise writing from the initial project proposal as relevant. The write-up should be at least $4 + n$ pages, where $n$ is the number of students in the group, and at most 10 pages (not including references).

## Milestones and Timeline

| Milestone | Due date | Details | Fraction of project grade |
| --- | --- | --- | --- |
| Project proposal | October 9 | Groups are highly encouraged to meet with the instructor before the proposal deadline to ensure the topic is well-scoped and relevant to the course topic | 1/6 |
| Mid-semester project update presentation | November 5 | Overview of topic, progress, and next steps | 1/6 |
| Final presentation | December 15, 9am–12pm | Presentation of results | 1/3 |
| Final report | December 15, end of day | Complete project write-up | 1/3 |
{: .course-milestones }

## Grading rubrics

The project grade will be based on the four deliverables mentioned above; these should be seen as four stages of one continuous research process, and not as four independent assignments. You should incorporate feedback on earlier deliverables in your later work. Strong material (e.g., problem description, related work section) from an earlier deliverable may be refined and reused in later deliverable(s). 

Across all four deliverables, students should aim to make clear the answers to the first four questions of the [Heilmeier Catechism](https://www.darpa.mil/about/heilmeier-catechism):

1. What is the project trying to accomplish?
2. What are current approaches, and what are their limitations?
3. What is new about the proposed approach, and why might it work?
4. What are the potential impacts and benefits, if the project is successful?

In both written deliverables and presentations, these questions should be answered clearly, in plain English, with minimal jargon. The technical details---e.g., formal, mathematical models, proofs, experiments, etc.---should be described rigorously and clearly, in a way that makes their connection to the underlying problem and solution clear. Both positive (e.g., good experimental results and theoretical guarantees) and negative results (e.g., counterexamples, impossibility results, or unsuccessful experiments) can be useful to provide evidence in favor of or against proposed or previous methods.

Deliverables will be graded according to the following breakdowns; partial credit will reflect how fully the submission meets each standard. Use of generative AI on any project deliverable must follow the [course policy]({{ '/teaching/601-734/grading/' | relative_url }}#academic-integrity).

### Project proposal — 10 points

The proposal should provide a clear overview of the research problem, its motivation, and a feasible plan for executing the project. 

| Criterion | Points | Full-credit standard |
| --- | ---: | --- |
| **Project framing and novelty** | **3** | Clearly answers all four questions above: the project objective, limitations of current methods, novelty of the proposed method, and potential impact. The proposed contribution should go beyond a simple/direct application of prior learning-augmented methods. For example, it could propose and study a new prediction model, performance measure, problem setting, algorithm design, or type of guarantee. |
| **Writing and mathematical formulation** | **3** | Gives an accessible explanation of the problem and proposed method with minimal jargon, along with a precise mathematical formulation. All notation, problem parameters, assumptions, and performance measures are clearly defined. The exposition is concise, coherent, and readable for people outside the field. |
| **Theoretical component** | **2** | Proposes a concrete theoretical question related to obtaining a rigorous guarantee for the proposed problem, and a plausible approach toward answering this question. The theoretical question should be stated clearly and should go beyond simply applying existing results. |
| **Evaluation plan** | **2** | Proposes simulations or experiments that will test the claimed benefit of the new approach. Identifies a suitable dataset or data generation process, meaningful baselines, performance metrics, and sensitivity analyses (or other appropriate stress tests) that will be performed in the evaluation. |
{: .course-rubric }

### Mid-semester project update presentation — 10 points

The mid-semester project update presentation should build on the proposal, clearly conveying the problem that the project group is working on, the proposed solution, progress that has been made so far, and plans for the rest of the project.

| Criterion | Points | Full-credit standard |
| --- | ---: | --- |
| **Project framing and technical clarity** | **4** | Conveys answers to the four project questions and makes the project’s relevance and significance clear to the class. Explains the proposed methods, technical results, and planned or completed experiments rigorously, with an accompanying intuitive/conceptual explanation in plain English, with enough precision and context for the audience to understand and engage. |
| **Progress and next steps** | **4** | Explains what the project group has done so far, including both positive results and any useful negative results, and what has been learned from progress thus far. Also outlines a plan for the rest of the project. |
| **Visual communication, delivery, and discussion** | **2** | Uses clear, legible slides with visuals as appropriate; not just dense text + bullet points. The presentation is well paced and shows clear ownership of the material: presenters explain ideas in their own words and respond thoughtfully to questions and feedback. |
{: .course-rubric }

### Final project presentation — 20 points

The final presentation should build substantially on the mid-semester project update, providing complete detail on the course project topic, developed methods, technical results, experiments, and takeaways.

| Criterion | Points | Full-credit standard |
| --- | ---: | --- |
| **Framing and clarity** | **5** | Presents a clear, coherent project narrative with minimal jargon, explaining the problem, related work/prior methods and their limitations, the project's contribution, and potential impact. Provides the context (real-world, mathematical, algorithmic, etc.) needed to understand the contribution and results, explaining any and all notation when it is introduced. |
| **Technical detail** | **5** | Explains the new algorithm or method in detail and presents the main theoretical and empirical results. The presentation should include proof sketches/ideas, justification for methodological choices, and experimental results. The presentation should go beyond simply showing results and should consider their broader implications: e.g., what was learned, limitations of the results, and where the ideas could be extended. |
| **Demonstrated understanding of the material** | **6** | Demonstrates a detailed understanding of the project context, assumptions, new methods, proofs, experiments, and broader implications. Presenters can effectively answer specific questions such as: how their work is distinguished from prior work; technical questions about proofs and algorithm implementation; questions about choices that were made (and their justification) in developing the methodology; questions about limitations of the proposed method(s). |
| **Visual communication and delivery** | **4** | Uses clear, legible slides with a balance of visuals, math, and text as appropriate; not just dense text + bullet points. The presentation is well organized, well paced, and shows clear ownership of the material: presenters explain ideas in their own words (without relying on a script). |
{: .course-rubric }

### Final project write-up — 20 points

The final project write-up should be a self-contained research paper detailing the project topic, motivation, methods, and results. It should incorporate feedback from earlier deliverables (in particular the proposal and mid-semester update) and provide enough detail for the reader to fully understand the problem and results. Any code and data that were used in conducting experiments should be submitted alongside the final write-up. 

**Verification of AI-assisted content:** Students are responsible for checking and understanding all content that is produced with the assistance of AI. Evidence that AI-generated material was submitted without adequate checking or editing (such as fabricated/misrepresented references or obviously incorrect mathematical statements) will cap the *Clarity and rigor* score at 4/8 and will also result in point deductions for other relevant rubric criteria.

| Criterion | Points | Full-credit standard |
| --- | ---: | --- |
| **Novelty and contribution** | **4** | Makes a clearly identifiable methodological, algorithmic, or theoretical contribution and explains how it goes beyond a simple application or incremental modification of a prior method. Positions the contribution in the context of closely related work from the literature, comparing the project's problem setting, assumptions, methods, and guarantees, relative to prior work. 
| **Technical depth** | **6** | Contains substantial theoretical *and* empirical analysis (3 points each) of the method and its comparison against prior methods. <br><br>Theoretical results and any necessary assumptions are stated precisely, and proofs are complete, correct, and clear. Key proof ideas are clearly explained in the exposition (i.e., with words, not just math), and supporting results/lemmas are proved or cited as appropriate. <br><br>Experiments evaluate the method thoroughly against relevant baselines and clearly explain the experimental setup/data, performance metrics, and implementation choices. Synthetic data may be used, but experiments that consider only very simple, toy settings (e.g., using only synthetic Gaussian data) will not receive full credit. Ablations are conducted as appropriate. Experiments stress test the claimed theoretical results, for example by conducting evaluations under distribution shift or adversarial attacks. The results are interpreted to draw conclusions and suggest possible improvements and other avenues for future study.
| **Structure** | **2** | Includes: (a) an introduction, (b) overview of related work, (c) model overview, (d) technical/theoretical results, (e) experimental results, (f) conclusions and future work, (g) AI use disclosure, when applicable. Satisfies the page limits. If the paper has long proofs that go over the page limit, these may be included in a separate appendix section, but the main concepts and contributions of the paper should still be clearly described and accessible in the main body of the paper.
| **Clarity and rigor** | **8** | Provides clear, understandable, convincing answers to the four project questions listed above, using minimal jargon throughout the paper. Citations are complete, verifiable, and used (in the related work section, in particular) to delineate precisely what is and is not new. Notation is consistent, mathematical statements are precise, assumptions are clearly stated, proofs are correct and understandable, and experimental details are clearly described. Clear, intuitive explanations are given for formal, technical ideas in the problem setting, model, theoretical results, proofs, and experiments. Figures and tables are well-designed, convey results clearly, and include error bars or confidence intervals where appropriate.<br><br>The prose should reflect the authors’ own understanding of the work and must comply with the [course’s generative AI policy]({{ '/teaching/601-734/grading/' | relative_url }}#academic-integrity).
{: .course-rubric }

## Project resources

- Projects should be formatted using the [NeurIPS LaTeX template](https://media.neurips.cc/Conferences/NeurIPS2025/Styles.zip).
- Written deliverables should be submitted on Canvas.
- If you need help deciding on a project topic, come to office hours or set up a meeting with the instructor. 
