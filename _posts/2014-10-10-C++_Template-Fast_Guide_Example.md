---
layout: post
type: blog
subject: "C++ Programming"
title: "C++ Template - Fast Guide Example"
category: "development"
image: "post_cpp.jpg"
resource_folder: "post"
author: "Rogerio dos Santos"
published: true
---

Function Template
===

{% gist anonymous/5a199f419dffab525197 %}

.H File
---

    template<class ValueType>
    std::wstring MyFunction(uint parameter, ValueType template_parameter);

.Cpp File
---

    template<class ValueType>
    std::wstring MyClass::MyFunction(uint parameter, ValueType template_parameter)
    {
        return (boost::wformat(L"%1%") % template_parameter).str());
    }

    //Specialization to allow the template to be used in other files
    template std::wstring MyClass::MyFunction<bool>(uint parameter, bool template_parameter);
    template std::wstring MyClass::MyFunction<int>(uint parameter, int template_parameter);
