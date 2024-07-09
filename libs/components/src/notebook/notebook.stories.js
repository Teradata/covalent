import './notebook';
import '../cell/cell';

export default {
  title: 'Components/Notebook',
  args: {
    cells: [
      {
        code: 'print',
        language: 'python',
        outputs: [
          {
            data: {
              'image/png': `iVBORw0KGgoAAAANSUhEUgAABR4AAAFoCAYAAAAxa+eIAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3W/MXNWdH/BDwrq2WsQSUiCWKBQqldClpUK0ltoiurRS1wglQsJLtCuRdeq1zIsWsIzsIEJIRGzZMtBWAnndOKzUVVhHQluhOH1RVoh9wxZR0aZNkCqioEj8SReyiK5gWRJXd7QzO8/4eZ6ZO+feufd3z8dvkO17zj3n8/uNn5kv98497+zZs2eTXwQIECBAgAABAgQIECBAgAABAgQIEGhQ4DzBY4OapiJAgAABAgQIECBAgAABAgQIECBAYCQgeNQIBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB4ze+CNdz7InMFwAgQIECBAgAABAgQIECBAgMAwBLZfvG0YG7GLRgQEj5mMgsdMQMMJ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Znw15B233Tz6Psfxr9zgcb2rKovBtlECBAgQIECAAIGVCQgeV0btRAQIECBAgACBjQXGtz+Pb6GujhwHj5dd8qnJ1Ynj2643utW6CjGnHz4znuO//6//M7lqcnzMzl/9x5N5q+Oe/N0/SFX4OX4atnoRIECAAAECBAgQyBEQPOboGUuAAAECBAgQaEhgHCg+9fjBNVc3jm+l/v4PfzQ6UxU4jn+t9x2P1d9Nfydk9b2NB/b9+porKatjZucdz+3264YKahoCBAgQIECAAIEkeNQEBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIEK4QixoAAAPmSURBVCBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECAgeNQDBAgQIECAAAECBAgQIECAAAECBAg0LiB4bJzUhAQIECBAgAABAgQIECBAgAABAgQICB71AAECBAgQIECAAAECBAgQIECAAAECjQsIHhsnNSEBAgQIECBAgAABAgQIECBAgAABAoJHPUCAAAECBAgQIECAAAECBAgQIECAQOMCgsfGSU1IgAABAgQIECBAgAABAgQIECBAgIDgUQ8QIECAAAECBAgQIECAAAECBAgQINC4gOCxcVITEiBAgAABAgQIECBAgAABAgQIECDw/wEvbNwid8fLEwAAAABJRU5ErkJggg==`,
              'text/html': `<div><div id="2c1355e9-ba46-41f4-be77-e5740742fce9" class="plotly-graph-div" style="height:525px; width:100%;"></div>            <script type="text/javascript">                require(["plotly"], function(Plotly) {                    window.PLOTLYENV=window.PLOTLYENV || {};                                    if (document.getElementById("2c1355e9-ba46-41f4-be77-e5740742fce9")) {                    Plotly.newPlot(                        "2c1355e9-ba46-41f4-be77-e5740742fce9",                        [{"alignmentgroup":"True","bingroup":"x","hovertemplate":"variable=total_bill\\u003cbr\\u003evalue=%{x}\\u003cbr\\u003ecount=%{y}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e","legendgroup":"total_bill","marker":{"color":"#636efa","pattern":{"shape":""}},"name":"total_bill","offsetgroup":"total_bill","orientation":"v","showlegend":true,"x":[16.99,10.34,21.01,23.68,24.59,25.29,8.77,26.88,15.04,14.78,10.27,35.26,15.42,18.43,14.83,21.58,10.33,16.29,16.97,20.65,17.92,20.29,15.77,39.42,19.82,17.81,13.37,12.69,21.7,19.65,9.55,18.35,15.06,20.69,17.78,24.06,16.31,16.93,18.69,31.27,16.04,17.46,13.94,9.68,30.4,18.29,22.23,32.4,28.55,18.04,12.54,10.29,34.81,9.94,25.56,19.49,38.01,26.41,11.24,48.27,20.29,13.81,11.02,18.29,17.59,20.08,16.45,3.07,20.23,15.01,12.02,17.07,26.86,25.28,14.73,10.51,17.92,27.2,22.76,17.29,19.44,16.66,10.07,32.68,15.98,34.83,13.03,18.28,24.71,21.16,28.97,22.49,5.75,16.32,22.75,40.17,27.28,12.03,21.01,12.46,11.35,15.38,44.3,22.42,20.92,15.36,20.49,25.21,18.24,14.31,14.0,7.25,38.07,23.95,25.71,17.31,29.93,10.65,12.43,24.08,11.69,13.42,14.26,15.95,12.48,29.8,8.52,14.52,11.38,22.82,19.08,20.27,11.17,12.26,18.26,8.51,10.33,14.15,16.0,13.16,17.47,34.3,41.19,27.05,16.43,8.35,18.64,11.87,9.78,7.51,14.07,13.13,17.26,24.55,19.77,29.85,48.17,25.0,13.39,16.49,21.5,12.66,16.21,13.81,17.51,24.52,20.76,31.71,10.59,10.63,50.81,15.81,7.25,31.85,16.82,32.9,17.89,14.48,9.6,34.63,34.65,23.33,45.35,23.17,40.55,20.69,20.9,30.46,18.15,23.1,15.69,19.81,28.44,15.48,16.58,7.56,10.34,43.11,13.0,13.51,18.71,12.74,13.0,16.4,20.53,16.47,26.59,38.73,24.27,12.76,30.06,25.89,48.33,13.27,28.17,12.9,28.15,11.59,7.74,30.14,12.16,13.42,8.58,15.98,13.42,16.27,10.09,20.45,13.28,22.12,24.01,15.69,11.61,10.77,15.53,10.07,12.6,32.83,35.83,29.03,27.18,22.67,17.82,18.78],"xaxis":"x","yaxis":"y","type":"histogram"}],                        {"template":{"data":{"histogram2dcontour":[{"type":"histogram2dcontour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"choropleth":[{"type":"choropleth","colorbar":{"outlinewidth":0,"ticks":""}}],"histogram2d":[{"type":"histogram2d","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"heatmap":[{"type":"heatmap","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"heatmapgl":[{"type":"heatmapgl","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"contourcarpet":[{"type":"contourcarpet","colorbar":{"outlinewidth":0,"ticks":""}}],"contour":[{"type":"contour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"surface":[{"type":"surface","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"mesh3d":[{"type":"mesh3d","colorbar":{"outlinewidth":0,"ticks":""}}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"parcoords":[{"type":"parcoords","line":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolargl":[{"type":"scatterpolargl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"scattergeo":[{"type":"scattergeo","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolar":[{"type":"scatterpolar","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"scattergl":[{"type":"scattergl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatter3d":[{"type":"scatter3d","line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermapbox":[{"type":"scattermapbox","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterternary":[{"type":"scatterternary","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattercarpet":[{"type":"scattercarpet","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"type":"carpet"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}],"barpolar":[{"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"pie":[{"automargin":true,"type":"pie"}]},"layout":{"autotypenumbers":"strict","colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"hovermode":"closest","hoverlabel":{"align":"left"},"paper_bgcolor":"white","plot_bgcolor":"#E5ECF6","polar":{"bgcolor":"#E5ECF6","angularaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"radialaxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"ternary":{"bgcolor":"#E5ECF6","aaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"baxis":{"gridcolor":"white","linecolor":"white","ticks":""},"caxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]]},"xaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"yaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"scene":{"xaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"yaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"zaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"geo":{"bgcolor":"white","landcolor":"#E5ECF6","subunitcolor":"white","showland":true,"showlakes":true,"lakecolor":"white"},"title":{"x":0.05},"mapbox":{"style":"light"}}},"xaxis":{"anchor":"y","domain":[0.0,1.0],"title":{"text":"value"}},"yaxis":{"anchor":"x","domain":[0.0,1.0],"title":{"text":"count"}},"legend":{"title":{"text":"variable"},"tracegroupgap":0},"margin":{"t":60},"barmode":"relative"},                        {"responsive": true}                    ).then(function(){\n                            \nvar gd = document.getElementById(\'2c1355e9-ba46-41f4-be77-e5740742fce9\');\nvar x = new MutationObserver(function (mutations, observer) {{\n        var display = window.getComputedStyle(gd).display;\n        if (!display || display === \'none\') {{\n            console.log([gd, \'removed!\']);\n            Plotly.purge(gd);\n            observer.disconnect();\n        }}\n}});\n\n// Listen for the removal of the full notebook cells\nvar notebookContainer = gd.closest(\'#notebook-container\');\nif (notebookContainer) {{\n    x.observe(notebookContainer, {childList: true});\n}}\n\n// Listen for the clearing of the current output cell\nvar outputEl = gd.closest(\'.output\');\nif (outputEl) {{\n    x.observe(outputEl, {childList: true});\n}}\n\n                        })                };                });            </script>        </div>`,
            },
            metadata: {},
            output_type: 'display_data',
          },
        ],
        errors: ['Error: Could not load data.'],
      },
      {
        code: 'select * from table_name;',
        language: 'sql',
        outputs: [{ data: { 'text/markdown': 'heres some output' } }],
        inputs: [{ prompt: 'enter password', password: true }],
      },
      {
        code: `
## Create and Populate Tables
        
Tables are created and populated using SQL`,
        language: 'markdown',
        outputs: [
          {
            data: {
              'text/markdown': `
## Create and Populate Tables
        
Tables are created and populated using SQL`,
            },
          },
        ],
      },
    ],
    cellTypes: [
      { type: 'markdown', name: 'Markdown' },
      { type: 'code', name: 'Code' },
    ],
    cellType: 'code',
  },
};

const Template = ({ cells, cellType, cellTypes }) => {
  const notebookContainer = document.createElement('div');
  notebookContainer.style.width = '80vw';
  const notebook = document.createElement('cv-notebook');
  notebook.cells = cells;
  notebook.cellTypes = cellTypes;
  notebook.cellType = cellType;
  notebookContainer.appendChild(notebook);
  return notebookContainer;
};
export const Basic = Template.bind({});