# 17th Street Canal Studio — student experiments

Open index.html in a browser. Standalone, offline, no dependencies. Hydraulic Lab remains separate.

## Reference reviewed
W.C. Seabergh (2010), Physical model study of wave and current conditions at 17th Street Canal breach due to Hurricane Katrina, Ocean Engineering 37, 48–58, doi:10.1016/j.oceaneng.2009.08.012. User supplied the complete 11-page PDF. Full text was extracted and reviewed; Tables 1–3 and the instrument map / head-loss plots were visually inspected. The paper itself is not redistributed.

## Student activities
1. Storm and pumps: seven discrete hourly cases from Table 1 (05:00–11:00 CDT, 29 August 2005). Inputs include Hm0, peak period, incoming direction and surge elevation relative to NAVD88 (2004.65). Table 2 distinguishes actual pump operation from deliberately different laboratory forcing. Sequence playback steps through tests rather than reproducing a continuous storm. Froude conversion uses 1:50 length and 50^2.5 discharge scaling.
2. Debris: all 15 Table 3 combinations at Q=425, 623 or 822 m³/s, with signed Vx/Vy and reported mean magnitudes for three probes. Unreported measurements remain null. No interpolation. Changing Q exposes only the restrictions tested at that discharge.
3. Flow-area playground: prescribed Q and blockage determine A=339(1-blockage/100), V=Q/A. This is continuity, not a calibrated bridge loss or wave solver. Fixed-Q scenarios do not imply actual flow remains unchanged when debris obstructs a canal.

Record cases and export CSV with provenance and units in the interface. Notebook data persist only for this browser session; export to keep them.

## Important distinctions
The actual pumps were off 05:00–08:00; the lab used 235 m³/s at 05:00 and 84 m³/s at 06:00–08:00. Do not equate the laboratory test schedule with the historical record.
Table 3 uses lake level 2.84 m and 347 m² unrestricted area. Section 4.2 head-loss tests use 2.8 m and 339 m². They are not silently combined. The paper's approximate debris blockage percentages and equivalent areas are not perfectly arithmetically consistent; the app does not derive an exact debris area from those percentages.
The measured magnitudes are retained as printed even where rounded Vx/Vy do not exactly reproduce them. Negative Vx denotes the table's along-canal component; unsigned speed is a separate column.
The paper simulated breach-related flow by withdrawing water from the southern basin, not by opening a physical breach. This application likewise does not simulate wall/soil failure.

## Visual limits
The basin remains an original schematic interpretation, not surveyed geometry. Figure 6 confirms general relationships but does not supply a complete DEM. Water level, wave motion, direction, flow indicators and debris patches provide illustrative visual context. Scene units are not geodetic elevations; the conversion used for visual appearance is arbitrary. Attenuation factors and ripple fields are illustrative, not fitted predictions. The paper's recorded results remain separate from appearance controls. Head-loss Figures 17–18 have not been digitized, so no head-loss response is fabricated.

## Files
studio.js: procedural 3D-to-canvas scene and camera.
paper-data.js: audited tables and continuity calculation, usable in Node.
experiments.js: cases, charts, notebook, exports.
index.html: interface and source/assumption notes.

## Validation
Source values visually checked against Tables 1–3. Automated checks passed seven storm cases and schedule distinction, all 15 measurement-case selections, missing-data preservation, 75% blockage continuity, invalid-range rejection, notebook CSV, mobile width and no browser errors. Desktop screenshot inspected. These are software/data checks, not validation of new hydraulic predictions.
