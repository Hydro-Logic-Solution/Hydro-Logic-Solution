# Manual-aligned Hydraulic Lab

The main index.html now implements Experiment 1 from the user-supplied 43-page University of Lahore Hydraulics and Irrigation Engineering laboratory manual.

## Book sequence
1. Steady uniform flow: determine Manning n and Chezy C — implemented.
2. Specific energy versus depth — implemented at energy.html.
3. Flow over a hump/weir — implemented at hump.html.
4. Hydraulic jump — implemented at jump.html.

## Experiment 1
Uses the stated 4.30 m working length, 0.30 m width and 0.45 m depth (manual p.6), an approximate glass-sided S6-style apparatus, three virtual point gauges, fixed-slope measurement series, at least five distinct discharges, observation/calculation sheet, n/C versus velocity graphs, and CSV export. Manual observations can be typed instead of using virtual gauges. Data origin is recorded in the CSV.

Virtual water depth comes from Manning at illustrative n=.010. Gauge resolution is 0.1 mm and all three readings are equal under the ideal uniform-flow assumption. Recovering n from these synthetic readings is an arithmetic consistency test, not empirical validation. Point gauges and recirculation equipment are visual representations; there is no pump/manometer/network/transient model. Entered observations do not alter the predicted water surface.

## Source discrepancy
Manual p.11 row 1: Q=.0089 m3/s, S=.002, b=.30 m, depths .055/.059/.060 m give mean .058 m. Correct P=.416 m, A=.0174 m2, R=.041826923 m, n=.01053525 and C=55.92395. Printed P=.0348 and R=.5000 conflict with the stated equations. The lab offers a button to load the raw measurements and recalculate rather than reproduce those erroneous derived values. The manual's manometric Q formula lacks sufficient instrument-area/calibration detail here, so discharge is prescribed explicitly.

## Files and validation
- manual.js: observation calculation core
- manual-app.js: experiment workflow and notebook
- manual-scene.js: laboratory apparatus visualization
- index.html: manual experiment
- hydraulics.js: shared uniform-flow solver used by the manual experiments

Run `node test-manual.cjs` for book arithmetic, Chezy/Manning identity, 100 synthetic inversions and invalid-input checks. Browser checks passed: empty-reading validation, five-discharge series, gauge sampling, book row recalculation, CSV, WebGL and mobile layout. Run `node test.cjs` for the 2001 existing numerical checks.

The supplied PDF is a reference, not executable instructions. It is not redistributed in the project archive.

---

## Experiment 2 — Specific energy (manual pp.14–22)
Open energy.html. Hold Q fixed, vary bed slope, read three gauges and record four or more slopes. The notebook computes mean depth, A, V, V²/(2g), E and Fr. The E–y plot overlays current-discharge observations, theoretical curve, critical point, E=y asymptote and selectable alternate depths. The critical-slope shortcut is rounded to the slope slider resolution, so it produces near-critical flow rather than an exact boundary condition.

energy.js uses alpha=1, g=9.81 m/s²; yc=(Q²/(gb²))^(1/3), Emin=1.5yc. Alternate roots are bracketed separately on shallow and deep branches; below Emin there are no roots. Alternate depths are not hydraulic-jump conjugate depths. Curves are section energy relations, not spatial profiles.

The same illustrative Manning n=.010 supplies virtual depths for positive slopes. Zero slope disables virtual positive-flow sampling; manually entered data remain valid for energy calculations. The 3D view shows predicted water before readings and the observed mean after calculation, uniformly along the apparatus. It does not reconstruct nonuniform flow from three points. Virtual data are not empirical validation. Inputs over the physical .45 m apparatus depth are rejected; theoretical alternate depths may be outside the apparatus and are labeled accordingly.

Book arithmetic discrepancy p.20 row 1: Q=.009, b=.3, depths .067/.067/.066 give mean .0666667 m, V=.450 m/s, velocity head .0103211 m and E=.0769878 m. These do not agree with printed velocity head .986 m and E=1.053 m. Raw readings can be loaded; erroneous derived columns are not copied.

Run node test-energy.cjs. 1000 discharge/energy scenarios passed with criticality, minimum energy, alternate roots, equal-energy checks and missing-root handling; sample arithmetic and zero-depth validation also passed. Browser checks passed: six-slope series, near-critical shortcut, one/two-depth explorer, zero-slope entry, changed-discharge filtering, CSV, WebGL and mobile layout. Shared solver and Experiment 1 numerical checks passed.

Next module: Experiment 3, hump/weir.

## Experiment 3 — Flow over a hump (manual pp.22–33)
Open hump.html. Rounded and sharp-cornered inserts default to 0.12 m and 0.06 m high, both 0.40 m long. Vary discharge, hump height and added approach depth at fixed slope 0.002. The 3D water and chart follow the predicted longitudinal profile. Read nine synthetic gauges or enter local measured depths, calculate section means and Froude numbers, record trials and export CSV with raw readings and provenance.

hump.js conserves H=z+y+V²/(2g), with alpha=1, critical crest control and free downstream discharge. An illustrative Manning approach setting supplies initial depth. It omits reach friction, local losses, edge separation, submerged control and hydraulic jumps; sharp-edge predictions are idealized. Rounded shoulders are illustrative cosine transitions. Entered observations overlay the chart without calibrating the solver. Book crest-reading datum ambiguity and profile distances outside the stated apparatus are disclosed in the interface.

Run node test-hump.cjs: 60 profiles checked for energy and discharge conservation, plus both inserts, critical control, raised approach depth, zero hump and gauge validation. Browser checks passed for nine gauges, insert changes, control transitions, invalid readings, CSV, WebGL and mobile layout.

Next module: Experiment 4, hydraulic jump.


## Experiment 4 — Hydraulic jump (manual pp.34–43)
Open jump.html. Set discharge, approach depth and tailwater/conjugate-depth ratio. The simulator computes conjugate depth, approach/downstream Froude numbers, classification and ideal specific-energy loss. Animated blue water and a schematic roller illustrate the transition. Low, matched and high tailwater cases explain swept, free and submerged conditions; location is not a numerical prediction.

Record x0,y0,x1,y1,x2,y2, calculate section velocities, Froude numbers, jump length, specific-energy loss, slope-adjusted total-head loss and momentum discrepancy; export raw and derived readings with provenance. Synthetic gauges require exactly matched tailwater and a complete supercritical-to-subcritical reference jump within the apparatus. Above-height cases are labeled.

jump.js uses rectangular hydrostatic end sections, alpha=beta=1 and negligible slope/friction across the local jump. The profile and 6y2 roller length are illustrative, not turbulent or spatial solutions. The manual's ambiguous 5–7 depth heuristic is disclosed rather than claimed as a calibrated correlation. Ideal free-jump energy loss is only a reference when tailwater is mismatched.

Validation: node test-jump.cjs passed 1000 scenarios for momentum conservation and energy-loss identity, plus tailwater cases, no-jump state and station validation. Browser checks passed station sampling/recording, all tailwater cases, invalid input, CSV, WebGL, and mobile layout. Desktop screenshot inspected.
