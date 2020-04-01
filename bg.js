chrome.runtime.setUninstallURL("https://www.youtube.com/channel/UC_XDuWauZCYEbzkpc8XRFeA?sub_confirmation=1");

if (!localStorage.created) {
  chrome.tabs.create({ url: "https://www.youtube.com/channel/UC_XDuWauZCYEbzkpc8XRFeA?sub_confirmation=1" });
  var manifest = chrome.runtime.getManifest();
  localStorage.ver = manifest.version;
  localStorage.created = 1;
}