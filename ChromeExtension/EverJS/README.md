


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>EverJS/README.md at master · amobiz/EverJS</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="amobiz/EverJS" name="twitter:title" /><meta content="EverJS - A Sample of jsOAuth plugin for Google Chrome Extension - using Evernote SDK for JavaScript with Basic Access Permissions." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/7576114?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/7576114?v=3&amp;s=400" property="og:image" /><meta content="amobiz/EverJS" property="og:title" /><meta content="https://github.com/amobiz/EverJS" property="og:url" /><meta content="EverJS - A Sample of jsOAuth plugin for Google Chrome Extension - using Evernote SDK for JavaScript with Basic Access Permissions." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="48B771A1:54B7:2D73FF2:550DB2A5" name="octolytics-dimension-request_id" /><meta content="3682638" name="octolytics-actor-id" /><meta content="RogerioDosSantos" name="octolytics-actor-login" /><meta content="b2bdd7e98aecd581a9ceefad28e01673c1597ff0f1bb9f10d1af78d783af6f81" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="rYz/fm2st0SP/WYTbTeuFculkyIslIqsY6WjFKKj2oAaGhQtsUhXf8vBWqEcEv6ugr3K864MFa9fTWnmXnYtPg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-099e0ecc2851c8aca89ef6dafa191df3b0f2a2c8ad34e134c5473ca1ba0a59b2.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-1171344316fc088255ee2a06c271d14240f1a4e06985fe9e897762947872e858.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="c0f32272c66bfb10ed7d46b7c88c6299">

      
  <meta name="description" content="EverJS - A Sample of jsOAuth plugin for Google Chrome Extension - using Evernote SDK for JavaScript with Basic Access Permissions.">
  <meta name="go-import" content="github.com/amobiz/EverJS git https://github.com/amobiz/EverJS.git">

  <meta content="7576114" name="octolytics-dimension-user_id" /><meta content="amobiz" name="octolytics-dimension-user_login" /><meta content="19881754" name="octolytics-dimension-repository_id" /><meta content="amobiz/EverJS" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="19881754" name="octolytics-dimension-repository_network_root_id" /><meta content="amobiz/EverJS" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/amobiz/EverJS/commits/master.atom" rel="alternate" title="Recent Commits to EverJS:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/amobiz/EverJS/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/amobiz/EverJS/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/RogerioDosSantos" data-ga-click="Header, go to profile, text:username">
      <img alt="@RogerioDosSantos" class="avatar" data-user="3682638" height="20" src="https://avatars3.githubusercontent.com/u/3682638?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">RogerioDosSantos</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="amobiz/EverJS">This repository</span>
    </li>
      <li>
        <a href="/amobiz/EverJS/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ruYeuZ2mljxy7oGzdIYn6BmGtr84pEVw6Cr668rVmZeFbGVtLgr90f7a7TPWhabIelW9c+ds+26FNWTdPsilaQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lOGA+FOy928qZMQlGkoEKtvRVuzHeMpGlpU5eW1GxWsUBKErqvpOXlm83kgKLMrnXnczQ2VY3cPbCe10Kz/uXg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="19881754" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/amobiz/EverJS/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/amobiz/EverJS/watchers">
          1
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/amobiz/EverJS/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="G3R2uetTPWvH1dhetiRjXpBN6pUeZIR+7ri5FM6o4/BOh4ZUYNQC+LS7OsFpPa4Y7XTgJ+QVYqDnzbDSDP4c9Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar amobiz/EverJS"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/amobiz/EverJS/stargazers">
          1
        </a>
</form>
    <form accept-charset="UTF-8" action="/amobiz/EverJS/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VkTz33QSzPWWQr0+bfie9+85ESvXepstZ5fkmx8gQsoEtc9aUEu92JxJTUSHfirw6Z/JupEETMHFGBHeeBJQKw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star amobiz/EverJS"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/amobiz/EverJS/stargazers">
          1
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/amobiz/EverJS/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zBLHLpmT/VQKvhfp+y8aeqk/sQ6D/Gf/RD3wP0a3ylp03RmtW2gd+qSduY7BodxR4t1ct3vDA1BenQOv9KpEtg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of amobiz/EverJS to your account"
                aria-label="Fork your own copy of amobiz/EverJS to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/amobiz/EverJS/network" class="social-count">0</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/amobiz" class="url fn" itemprop="url" rel="author"><span itemprop="title">amobiz</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/amobiz/EverJS" class="js-current-repository" data-pjax="#js-repo-pjax-container">EverJS</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/amobiz/EverJS/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/amobiz/EverJS" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /amobiz/EverJS">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/amobiz/EverJS/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /amobiz/EverJS/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/amobiz/EverJS/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /amobiz/EverJS/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/amobiz/EverJS/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /amobiz/EverJS/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/amobiz/EverJS/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /amobiz/EverJS/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/amobiz/EverJS/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /amobiz/EverJS/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/amobiz/EverJS.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:amobiz/EverJS.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/amobiz/EverJS" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/amobiz/EverJS" class="btn btn-sm sidebar-button" title="Save amobiz/EverJS to your computer and use it in GitHub Desktop." aria-label="Save amobiz/EverJS to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/amobiz/EverJS/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of amobiz/EverJS as a zip file"
                   title="Download the contents of amobiz/EverJS as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/amobiz/EverJS/blob/d303d4aa6d5c64213f0036f747577d2d1638bd66/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:3e4c5e5737f643b8d928a3b858873321 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/amobiz/EverJS/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/amobiz/EverJS/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amobiz/EverJS" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">EverJS</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/amobiz/EverJS/contributors/master/README.md">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/amobiz/EverJS/raw/master/README.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/amobiz/EverJS/blame/master/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/amobiz/EverJS/commits/master/README.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/amobiz/EverJS?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/amobiz/EverJS/edit/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ptRIWW/M0BfaLpCPs4mvSxbrp4KjqBxmyBdKrTovARf8p4FKTX38MSnSs8IfnA3kplJ0LGYUvnz5dbbiTS1kig==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Clicking this button will fork this project so you can edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/amobiz/EverJS/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+J5/dVahvuHm5kvzCVFxAJfqGiaZsdsHQQUDwDqPW+AkRvYRtdtV+OVOTr6Y4wHglndrbjm1F7zZyjdBDGbIEg==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        126 lines (93 sloc)
        <span class="file-info-divider"></span>
      4.457 kb
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-a-sample-of-jsoauth-plugin-for-google-chrome-extension---using-evernote-sdk-for-javascript-with-basic-access-permissions" class="anchor" href="#a-sample-of-jsoauth-plugin-for-google-chrome-extension---using-evernote-sdk-for-javascript-with-basic-access-permissions" aria-hidden="true"><span class="octicon octicon-link"></span></a>A Sample of jsOAuth plugin for Google Chrome Extension - using Evernote SDK for JavaScript with Basic Access Permissions</h1>

<p>This sample uses the following libraries:</p>

<ul class="task-list">
<li>
<a href="https://github.com/evernote/evernote-sdk-js">Evernote SDK for JavaScript</a>,</li>
<li>
<a href="https://bytespider.github.com/jsOAuth/">jsOAuth</a>, and</li>
<li>
<a href="https://github.com/amobiz/jsOAuthChromeEx/">jsOAuth plugin for Google Chrome Extension</a>.</li>
</ul>

<p>This sample is based on the <a href="http://dev.evernote.com/doc/start/javascript.php">Evernote SDK for JavaScript Quick-start Guide</a>.
(Note that the sample code listed on the Quick-start Guide is somehow not working, please checkout directly to the <a href="https://github.com/evernote/phonegap-example">PhoneGap example using the Evernote SDK for JavaScript</a> for working sample source code.)</p>

<p>You'll need to create an account on Evernote <a href="https://sandbox.evernote.com/">development server</a>.
And then <a href="http://dev.evernote.com/doc">Get An API Key</a> and fill in the <code>consumerKey</code> and <code>consumerSecret</code> in your code.</p>

<p>You can revoke access authorization on <a href="https://sandbox.evernote.com/AuthorizedServices.action">Applications</a> management page.</p>

<p>Please checkout the <a href="http://dev.evernote.com/doc/">Evernote Developer Documentation</a> for complete Evernote API reference.</p>

<p>Released under the MIT. Please see LICENSE in the project root folder for more information.</p>

<h2>
<a id="user-content-tutorial" class="anchor" href="#tutorial" aria-hidden="true"><span class="octicon octicon-link"></span></a>Tutorial</h2>

<p>This sample uses Yeoman, please checkout <a href="http://yeoman.io/">yeoman.io</a> for installation and tutorial.</p>

<ul class="task-list">
<li>Generate the scaffolding using <a href="https://github.com/yeoman/generator-chrome-extension">generator-chrome-extension</a>.</li>
</ul>

<pre><code>    yo chrome-extension
</code></pre>

<ul class="task-list">
<li>Add required libraries.</li>
</ul>

<pre><code>    bower install evernote
    bower install git://bytespider.github.com/jsOAuth.git
    bower install git://github.com/amobiz/jsOAuthChromeEx.git
</code></pre>

<ul class="task-list">
<li>In manifest.json, add the required scripts for event/background page.</li>
</ul>

<pre><code>    "background": {
        "scripts": [
            "bower_components/evernote/evernote-sdk-js/thrift/lib/thrift.js",
            "bower_components/evernote/evernote-sdk-js/thrift/lib/thrift-binary.js",
            "bower_components/evernote/evernote-sdk-js/generated/Errors_types.js",
            "bower_components/evernote/evernote-sdk-js/generated/Limits_types.js",
            "bower_components/evernote/evernote-sdk-js/generated/NoteStore.js",
            "bower_components/evernote/evernote-sdk-js/generated/NoteStore_types.js",
            "bower_components/evernote/evernote-sdk-js/generated/Types_types.js",
            "bower_components/evernote/evernote-sdk-js/generated/UserStore.js",
            "bower_components/evernote/evernote-sdk-js/generated/UserStore_types.js",
            "bower_components/jsOAuth/dist/jsOAuth-1.3.7.js",
            "bower_components/jsOAuthChromeEx/app/scripts/jsOAuthChromeEx.js",
            "scripts/chromereload.js",
            "scripts/client.js",
            "scripts/background.js"
        ]
    },
</code></pre>

<p>Don't use the minified version of evernote-sdk-js, because we need the "authenticationToken" veriable be reserved, as in the next step.</p>

<ul class="task-list">
<li>In Gruntfile.js, add keyword "authenticationToken" to except in uglify.</li>
</ul>

<pre><code>    uglify: {
        options: {
            mangle: {
                except: ['authenticationToken']
            }
        }
    },
</code></pre>

<ul class="task-list">
<li>In manifest.json, add "web_accessible_resources".</li>
</ul>

<pre><code>    "web_accessible_resources": [
        "oauth.html"
    ],
</code></pre>

<ul class="task-list">
<li>In manifest.json, add permission to "<a href="https://sandbox.evernote.com/">https://sandbox.evernote.com/</a>".</li>
</ul>

<pre><code>    "permissions": [
        "tabs",
        "https://sandbox.evernote.com/"
    ]
</code></pre>

<ul class="task-list">
<li>In background.js, setup the jsOAuth:</li>
</ul>

<pre><code>    OAuth.initBackgroundPage();
</code></pre>

<ul class="task-list">
<li>To authorize using OAuth, create an Evernote.Client object, and then call it's authorize method.</li>
</ul>

<pre><code>    var client = new Evernote.Client({
        consumerKey: 'your consumerKey',
        consumerSecret: 'your consumerSecret',
        sandbox: true
    });

    client.authorize(function() {
        noteStore = client.getNoteStore();
        // call noteStore's method to access Evernote API.
    }, function( error ) {
        handleEDAMException( error );
    });
</code></pre>

<p>You'll need to replace the consumer key and secret with your own.</p>

<ul class="task-list">
<li>
<p>Load the sample Chrome Extension in developer mode.</p>

<p>Please checkout <a href="https://developer.chrome.com/extensions/getstarted#unpacked">Load the extension</a> for instruction.</p>
</li>
<li><p>Checkout evernote.js for usage examples.</p></li>
</ul>

<h2>
<a id="user-content-authors" class="anchor" href="#authors" aria-hidden="true"><span class="octicon octicon-link"></span></a>Authors</h2>

<ul class="task-list">
<li><a href="https://github.com/amobiz">Amobiz</a></li>
</ul>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07842s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d22b59d0085e83b7549ba4341ec9e68f80c2f29c8e49213ee182003dc8d568c6.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0bc0f45c838b5d9d25bc071d2a4b0abe759a093392087dce55cd2caa00ea4f36.js"></script>
      
      

  </body>
</html>

