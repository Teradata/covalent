import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'flavored-markdown-demo-nested-html',
  styleUrls: ['./flavored-markdown-demo-nested-html.component.scss'],
  templateUrl: './flavored-markdown-demo-nested-html.component.html',
})
export class FlavoredMarkdownDemoNestedHtmlComponent {
  htmlNestedFlavoredMarkdown = `
<div style="border: 3px solid #FF5F02; border-radius: 10px; padding: 20px; background-color: white; color: #00233C; font-family: Arial;">

# 🚀 **Platform Overview**: Heading description of content


## 📘 **Introduction**  

Introduction that describes some **toolkit** that has a lot of features and capabilities. This toolkit is designed to help data scientists, machine learning engineers, and **AI practitioners**.


---

## ✨ **Benefits**
- ⚙️ **List item 1**: Detailed description of the first item on the list.
- 🚀 **List item 2**: Detailed description of the second item on the list.
- 🧠 **List item 3**: Detailed description of the third item on the list.
- 🧰 **List item 4**: Detailed description of the fourth item on the list.
- 🔒 **List item 5**: Detailed description of the fifth item on the list.

---
    
## 🌟 **Product Overview**

<p>
  <a href="#" style="display: inline-flex; align-items: center; justify-content: center; background-color: #FF5F02; color: #ffffff; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 5px 0; transition: all 0.3s ease;">
    <i class="fas fa-external-link-alt" style="margin-right: 10px;"></i>Button with Link
  </a>
</p>

- 🖥️ **List item 1** Detailed description of the first item on the list. 
- 🐍🎨 **List item 2** Detailed description of the second item on the list.  
- 📦 **List item 3** Detailed description of the third item on the list.  
- 💡 **List item 4** Detailed description of the fourth item on the list.  
- ✅ **List item 5** Detailed description of the fifth item on the list.

---
<p>
  <a href="#" style="display: inline-flex; align-items: center; justify-content: center; background-color: #FF5F02; color: #ffffff; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; padding: 12px 20px; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 5px 0; transition: all 0.3s ease;">
    <i class="fas fa-external-link-alt" style="margin-right: 10px;"></i>Button with Link
  </a>
</p>

- 🔄 **List Item 1** Detailed description of the first item on the list  
- 🎛️ **List Item 2** Detailed description of the second item on the list  
- 🖥️ **List Item 3**:
  - 🌐 Sub item 1  
  - 💻 Sub item 2
  - 🐍📦 Sub item 3 
- 👉 **List Item 4** [Some link to somewhere else](https://github.com/Teradata/covalent)

---

## 🧠 **Use Cases**

### 🔍 **1. First sub heading**

- 🧭 **List Item 1** Detailed description of the first item on the list.  
- 🧠 **List Item 2** Detailed description of the second item on the list.  
- 🤖 **List Item 3** Detailed description of the third item on the list.
    
<a href="#" style="display: inline-flex; align-items: center; justify-content: center; background-color: #FF5F02; color: #ffffff; font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; text-decoration: none; padding: 12px 24px; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer; transition: all 0.3s ease;">
  <i class="fas fa-external-link-alt" style="margin-right: 10px;"></i>Button with Link
</a>
    
### 🔍 **2. Second sub heading**

- 🧭 **List Item 1** Detailed description of the first item on the list.
- 🧠 **List Item 2** Detailed description of the second item on the list.
- 📈 **List Item 3** Detailed description of the third item on the list.

<a href="#" style="display: inline-flex; align-items: center; justify-content: center; background-color: #FF5F02; color: #ffffff; font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; text-decoration: none; padding: 12px 24px; border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer; transition: all 0.3s ease;">
  <i class="fas fa-external-link-alt" style="margin-right: 10px;"></i>Button with Link
</a>


</div>
`;
}
